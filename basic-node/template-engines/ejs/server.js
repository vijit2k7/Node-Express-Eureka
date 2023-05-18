const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
  res.render('index');
})


app.get('/user',(req,res)=>{
  const user = {
    name: "Theodore Kelechukwu O.",
    stack: "MERN",
    email: "theodoreonyejiaku@gmail.com",
    hobby: ["singing", "playing guitar", "reading", "philosoph"]
  }
  res.render("user", {user});
});

app.listen(process.env.port||3001);
console.log('Web Server is listening at port '+ (process.env.port || 3000));