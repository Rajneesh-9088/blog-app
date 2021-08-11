const express = require('express');
const app = express();
const path = require('path');
const connectDB = require('./db');

// conneting to database
connectDB();

app.set('vie engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '/public')));


app.get('/', (req,res)=>{
    res.send("Hello Rajneesh");
})









app.listen(3000, ()=>{
    console.log('server running at port 3000');
})