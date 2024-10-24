const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const bodyparser = require("body-parser");

app.use(bodyparser.json())
app.use(cors());
app.use(bodyparser.urlencoded({extended:true}));
let p = {fname: "jan"}
app.use(express.json());

app.post("/server", (req, res) =>{

    console.log(req.body.server)
})


app.get('/x', (req, res) => res.json(p))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))