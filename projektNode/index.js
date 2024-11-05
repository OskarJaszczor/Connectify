const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const bodyparser = require("body-parser");
const mysql = require("mysql");

app.use(bodyparser.json());
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.json());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "projektnode",
});

connection.connect((err) => {
  if (err) {
    console.error("Nie udało się połączyć z bazą danych:", err);
  } else {
    console.log("Połączono z bazą danych!");
  }
});

function getDatabase() {
  return Promise.all([
    new Promise((resolve, reject) => {
      connection.query("SELECT * FROM servers", (err, rows) => {
        console.log("tutaj 1!");
        if (err) {
          reject(err);
        } else {
          resolve({ servers: rows });
        }
      });
    }),
    new Promise((resolve, reject) => {
      connection.query("SELECT * FROM channels", (err, rows) => {
        console.log("tutaj 2!");
        if (err) {
          reject(err);
        } else {
          resolve({ channels: rows });
        }
      });
    }),
    new Promise((resolve, reject) => {
      connection.query("SELECT * FROM messages", (err, rows) => {
        console.log("tutaj 3!");
        if (err) {
          reject(err);
        } else {
          resolve({ messages: rows });
        }
      });
    }),
  ]).then((results) => {
    return Object.assign({}, ...results);
  });
}

app.get("/", async (req, res) => {
  const data = await getDatabase();
  res.json(data);
});

app.post("/server", (req, res) => {
  console.log(req.body.server);
});

app.get("/x", async (req, res) => {
  const data = await getDatabase();
  console.log(data);
  res.json(data);
});

let messages = [];

app.post("/messages", async (req, res) => {
  const { content, author, channel, date, hour } = req.body;

  console.log("Otrzymano wiadomość:", content);
  console.log("Autor:", author);
  console.log("Data:", date);
  console.log("Godzina:", hour);

  const query = `
  INSERT INTO messages (messageId, channelId, content, author, date, hour) 
  VALUES (NULL, ?, ?, ?, ?, ?)`;

  //console.log(query);

  const values = [channel, content, author, date, hour];

  connection.query(query, values, (error, results) => {
    if (error) {
      console.error("Błąd przy dodwaeaiudo bazy:", error);
    }
    console.log("Wiadomość dodana:", { content, author, channel, date, hour });
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
