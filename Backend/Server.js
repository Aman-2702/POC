const express = require('express')
const bodyparser = require('body-parser')
const app = express();
const mongoose = require("mongoose");
var cors = require('cors')
app.use(cors())

const urlDB = ("mongodb://0.0.0.0:27017/addressDB")
app.use(bodyparser.json());

const connectionsParams = {
    UseNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose
    .connect(urlDB, connectionsParams)
    .then(() => {
        console.info("Connected to the DB");
    })
    .catch((e) => {
        console.log("Error :", e);
    })

const routing = require('./Routes/route');
app.use('/', routing);

console.log("App running")

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log('Server is running: ' + port)
})