const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
const port = 3002

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'projektnode',
})

db.connect(err => {
	if (err) throw err
	console.log('Połączono z bazą danych!')
})

app.post('/register', (req, res) => {
	const { login, password } = req.body

	db.query('SELECT * FROM users WHERE login = ?', [login], (err, results) => {
		if (err) return res.status(500).json({ error: err })
		if (results.length > 0) {
			return res.status(400).json({ message: 'Użytkownik już istnieje' })
		}

		db.query('INSERT INTO users (login, password) VALUES (?, ?)', [login, password], err => {
			if (err) return res.status(500).json({ error: err })
			res.status(201).json({ message: 'Użytkownik zarejestrowany' })
		})
	})
})

app.post('/login', (req, res) => {
	const { login, password } = req.body

	db.query('SELECT * FROM users WHERE login = ? AND password = ?', [login, password], (err, results) => {
		if (err) return res.status(500).json({ error: err })
		if (results.length === 0) {
			return res.status(401).json({ message: 'Nieprawidłowy login lub hasło' })
		}
		res.status(200).json({ message: 'Zalogowano pomyślnie' })
	})
})

app.listen(port, () => {
	console.log(`Dziala sb na porcie ${port}`)
})
