const express = require('express');
const app = express();
const cors = require('cors');
const { readdirSync } = require('fs')
require('./db/conn')

require('dotenv').config()

const port = process.env.PORT;

app.use(express.json())
app.use(cors())

readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))

app.get("/", (req, res) => {
    res.send("dfdsssf")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})