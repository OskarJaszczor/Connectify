const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')

app.use(cors());

let p = {fname: "jan"}


app.get('/x', (req, res) => res.json(p))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))