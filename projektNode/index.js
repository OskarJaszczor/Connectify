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
    ]).then((results) => {
        return Object.assign({}, ...results);
    });
}

app.post('/addMessage', async(req, res) => {
    const { content, channel } = req.body;
    const date = new Date();
    const hours = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
    const query = "INSERT INTO `messages`(`messageId`, `channelId`, `content`, `author`, `date`, `hour`) VALUES ('','" + channel + "','" + content + "','admin','" + date.getUTCDate() + "','" + hours + "')";
    db.query(query, (error, results) => {
        if (error) {
            res.status(500).json({ message: 'Error adding user', error });
        } else {
            console.log("Dodano")
        }
    });
});


app.get("/", async(req, res) => {
    const data = await getDatabase();
    res.json(data);
});

app.post("/server", (req, res) => {
    console.log(req.body.server);
});

app.get("/x", async(req, res) => {
    const data = await getDatabase();
    //   console.log(data);
    res.json(data);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));