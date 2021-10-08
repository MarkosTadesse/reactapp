const express = require('express');
const cors = require("cors");
const app = express();
app.listen(4000, ()=> console.log('listening at 4000'));

app.use(cors());
app.get('/login',(req,res) =>{

})

app.post('/register',(req,res) =>{
    console.log(req.body.username,req.body.password,req.body.email)
})