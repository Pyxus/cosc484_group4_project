require("dotenv").config({ path: "./config.env" });

const express = require('express')
const app = express();

app.get('/', function(req, res){
    return res.json({
        message : "Hello Express!",
        success: true
    })
})

app.post('/', function(req, res){
    return res.json({
        message : "Welcome",
        success: true
    })
})

app.listen(3000, () => console.log("Example app listening on port 3000!"))

var admin = require('firebase-admin')

admin.initializeApp({
    credential : admin.credential.cert(process.env.GOOGLE_APPLICATION_CREDENTIALS),
    databaseURL : ""
})