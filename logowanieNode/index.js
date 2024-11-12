const a = require("express");
const b = require("mysql");
const c = require("cors");
const bodyParser = require("body-parser");

const app = a();
const port = 3002;

app.use(c());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = b.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "projektnode",
});

db.connect((err) => {
  if (err) throw err;
  console.log("Połączono z bazą danych!");
});

app.post("/register", (req, res) => {
  const { login, password } = req.body;

  db.query("SELECT * FROM users WHERE login = ?", [login], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    if (results.length > 0) {
      return res.status(400).json({ message: "Użytkownik już istnieje" });
    }

    db.query(
      "INSERT INTO users (login, password) VALUES (?, ?)",
      [login, password],
      (err) => {
        if (err) return res.status(500).json({ error: err });
        res.status(201).json({ message: "Użytkownik zarejestrowany" });
      }
    );
  });
});

app.post("/login", (req, res) => {
  const { login, password } = req.body;

  db.query(
    "SELECT * FROM users WHERE login = ? AND password = ?",
    [login, password],
    (err, results) => {
      if (err) return res.status(500).json({ error: err });
      if (results.length === 0) {
        return res
          .status(401)
          .json({ message: "Nieprawidłowy login lub hasło" });
      }
      console.log();
      res.status(200).json({ username: results[0].username });
    }
  );
});

app.listen(port, () => {
  console.log(`Dziala sb na porcie ${port}`);
});
