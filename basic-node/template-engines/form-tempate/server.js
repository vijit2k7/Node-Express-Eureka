const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get('/',(req,res)=>{

  res.render("form");
});

app.post('/api/submitForm',(req,res)=>{
  console.log('req.body is',req.body);
  // save this data in database
  res.send('Success');
})

app.listen(process.env.port||3001);
console.log('Web Server is listening at port '+ (process.env.port || 3001));