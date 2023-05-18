const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/home',(req,res)=>{
  res.render('home');
});

app.get('/post',(req,res)=>{
  res.render('post');
});

app.listen(process.env.port||3001);
console.log('Web Server is listening at port '+ (process.env.port || 3000));