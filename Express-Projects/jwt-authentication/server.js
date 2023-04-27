const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const app = express();
app.use(bodyParser.json());
app.get('/test',(req,res)=>{
    res.send('Testing...')
});

function verifyAuth(req,res,next){
    console.log('verify auth function is called');
    const authHeader = req.headers.authorization;
    const jwtToken = authHeader&&authHeader.split(" ")[1];
    const userToken = req.userToken;

    const finalToken = jwtToken || userToken;
    console.log('jwt',jwtToken);
    if(!finalToken) res.status(403).send('Forbidden');

    jwt.verify(finalToken,'secret_key',(err,data)=>{
        if(err) res.status(401).send('Unauthorised!!');
        req.finalToken = finalToken;
        next();
    })
}

function createToken(req,res,next){
    console.log('create Token function is called');
    const authHeader = req.headers.authorization;
    const jwtToken = authHeader&&authHeader.split(" ")[1];
    const id = req.body.id;
    console.log('jwt token in create Token',jwtToken);
    if(!jwtToken){
        jwt.sign(id,'secret_key',(err,token)=>{
            if(err){
                res.status(403).send('Token invalid Error');
            }
            else{
                console.log('token is',token);
                req.userToken = token;
                next();
            }
        });
    }
    else
        next();
}

app.put("/logout", function (req, res) {
    const authHeader = req.headers["authorization"];
    jwt.sign(authHeader, "", { expiresIn: 1 } , (logout, err) => {
        if (logout) {
            res.send({msg : 'You have been Logged Out' });
            } else {
                res.send({msg:'Error'});
            }
        });
});

app.post('/signup',(req,res)=>{
    const id = req.body.id;
    const username = req.body.username;
    const password = req.body.password;
    jwt.sign(id,'secret_key',(err,token)=>{
        if(err){
            res.status(403).send('Token invalid Error');
        }
        else{
            console.log('token is',token);
            res.send({msg:'Token created',token:token});
        }
    })
});

app.post('/login',createToken,verifyAuth,(req,res)=>{
    res.send({msg:'Login Successful!!',token:req.finalToken});
})

app.listen(process.env.port||3000);
console.log('Web Server is listening at port '+ (process.env.port || 3000));
