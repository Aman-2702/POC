const express = require('express');
const app = express();
const cors = require("cors")
app.use(cors());
const mongoose = require('mongoose')
app.use(express.json())
const user_data = require('../Backend/Models/UserData')

//DB CONNNECTION
mongoose.connect("mongodb://0.0.0.0:27017/admin", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (!err) {
        console.log("Connected To DB")
    } else {
        console.log("Error:", err)
    }
})

//POST API

app.post("/post", async (req, res) => {

    //Mapping
    const info = new user_data({
        name: req.body.name,
        email: req.body.email,
        dob: req.body.dob,
        username: req.body.username,
        password: req.body.password,
        Address: req.body.Address,
        country: req.body.country,
        State: req.body.State,
        city: req.body.city
    });

    const val = await info.save();
    res.json(val);
})

app.listen(4002, () => {
    console.log("on port 4002")
})