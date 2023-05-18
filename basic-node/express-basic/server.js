const express = require('express');
const app = express();
const userRouter = require('./router/users');
const homeRouter = require('./router/home');
const applicationMiddlewareRouter = require('./middlewares/application');
app.use(loggingMiddleware);
app.use(express.json());
// get post put delete


function loggingMiddleware(req,res,next){
    console.log('Logging middleware!!',req.originalUrl);
    next();
    console.log('m1')
}

function testMiddleware(req, res, next) {
    console.log('test middleware called')
    if (req.query.admin) {
      next()
    }
    console.log('m2')
    res.send('Invalid Request')
  }

function authorizeMiddleware(req,res,next){
    console.log('authorise middleware!!',req.query);
    if(req.query.admin)
        {
            console.log('admin successful!!')
            next();
            console.log('m3')
        }
    else{
        res.send('403 - Forbidden Not an Admin!!');
    }
}

app.get('/login',testMiddleware,authorizeMiddleware,(req,res)=>{
        console.log('in controller')
        res.send('Login successful!!');
}); // controllers are used to end req res


app.use('/user',userRouter);
app.use('/',homeRouter);
app.use('/',applicationMiddlewareRouter);
//express --->middlewares ---> 

app.listen(process.env.port||3001);
console.log('Web Server is listening at port '+ (process.env.port || 3001));






// 200 ----> success code
// 301 ----> redirection

// 4xx ----> client side exceptions
// 5xx ----> server side exceptions

// login---> put wrong password --->clients fault ---> 401 error ---> unauthorised

// 404 ----> access bad resource ----> bad resource error

// 403 ----> forbidden

// what is the difference between authorisation and authentication?

//username password---> 200 success ---> login success ---> successful auth
//username password incorrect---> 401 success ---> login fail ---> authentication fail

//admin guest user developer super-admin
// guest ----> i cant place orders ---> view website ---> place an order ---> 403 -forbidden
// user ---> place order ---> add a product in amazon ----> 403 forbidden
// merchant ---> place order ---> add a product ---> change features in website

// 500 ---> internal server error ---> api response failing ---> server is down
// 502 ----> bad gateway error (frontend ---> api gateway ----> backend)
// 503 ----> service unavailable 