const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.get('/',(req,res)=>{

    res.render('index', {
        subject: 'Pug template engine',
        name: 'our template',
        link: 'https://google.com'
      });
})

app.listen(process.env.port||3000);
console.log('Web Server is listening at port '+ (process.env.port || 3000));