const express = require('express');
const router = express.Router();

router.get('/users',(req,res)=>{
    res.send('All Users api!!')   // /user/users
});

// query params in express
router.get('/:id',(req,res)=>{
    res.send('User called ' + req.params.id);  // /user/:id
});

router.post('/save',(req,res)=>{
    console.log('user submitted data',req.body); // /user/save
    req.body['age']= 28;
    res.send(req.body);
});

router.get('/details',(req,res)=>{
    res.send('user details api!')
});

module.exports = router;