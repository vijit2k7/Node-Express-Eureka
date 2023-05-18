const express = require('express');
const app = express();

app.use(express.static('../public'));
app.listen(5000);

app.get('/',(req,res)=>{
    res.send('Hello World!');
})

console.log('Web Server is listening at port '+ (process.env.port || 5000));