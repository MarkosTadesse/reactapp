const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser')
const app = express();
app.listen(4000, ()=> console.log('listening at 4000'));

app.use(cors());

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/login',(req,res) =>{
    console.log(req.body.username,req.body.password)
    return "hi"
})

app.post('/register',(req,res) =>{
    console.log(req.body.username,req.body.password,req.body.email)
})