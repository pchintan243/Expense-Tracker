const express = require('express');
const app = express();
const cors = require('cors');
const port = 7000;

app.use(express.json())

app.use(cors())

app.get("/", (req, res) => {
    res.send("dfdsssf")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})