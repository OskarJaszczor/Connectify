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
                if (err) {
                    reject(err);
                } else {
                    resolve({ servers: rows });
                }
            });
        }),
        new Promise((resolve, reject) => {
            connection.query("SELECT * FROM channels", (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve({ channels: rows });
                }
            });
        }),
        new Promise((resolve, reject) => {
            connection.query("SELECT * FROM messages", (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve({ messages: rows });
                }
            });
        }),
        new Promise((resolve, reject) => {
            connection.query("SELECT * FROM users", (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve({ users: rows });
                }
            });
        }),
    ]).then((results) => {
        return Object.assign({}, ...results);
    });
}

app.get("/", async(req, res) => {
    const data = await getDatabase();
    res.json(data);
});

app.post("/server", (req, res) => {
    console.log(req.body.server);
});



app.get("/x", async(req, res) => {
    const data = await getDatabase();

    //console.log(data);

    res.json(data);
});

let messages = [];

app.post("/messages", async(req, res) => {
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
            console.error("Błąd przy dodawaniu do bazy:", error);
        }
        console.log("Wiadomość dodana:", { content, author, channel, date, hour });
    });

    res.sendStatus(200);
});


app.post("/addServer", async(req, res) => {
    const { name, avatar, admin, users } = req.body;
    console.log(name)
    console.log(avatar)
    console.log(admin)
    console.log(users)
    const query = "INSERT INTO servers (`serverId`, `serverName`, `serverImg`, `users`) VALUES (null,?,?,?)";
    const values = [name, avatar, users];

    connection.query(query, values, (error, results) => {
        if (error) {
            console.error("Błąd przy dodawaniu do bazy:", error);
        }
        console.log("Server dodany:", { name, avatar, users });
    });

    res.sendStatus(200);
});


app.post("/addChannel", async(req, res) => {
    const { char, name, server } = req.body;

    const query = "INSERT INTO channels (`channelId`, `serverId`, `channelName`, `channelChar`) VALUES (null,?,?,?)";
    const values = [server, name, char];

    connection.query(query, values, (error, results) => {
        if (error) {
            console.error("Błąd przy dodawaniu do bazy:", error);
        }
        console.log("Kanał dodany:", { name, char, server });
    });

    res.sendStatus(200);
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));