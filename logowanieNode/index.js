const a = require('express')
const b = require('mysql')
const c = require('cors')
const bodyParser = require('body-parser')

const app = a()
const port = 3002

app.use(c())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const db = b.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'projektnode',
})

db.connect(err => {
	if (err) throw err
	console.log('Połączono z bazą danych!')
})

app.listen(port, () => {
	console.log(`Dziala sb na porcie ${port}`)
})
