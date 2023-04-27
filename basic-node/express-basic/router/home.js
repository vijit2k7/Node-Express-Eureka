const express = require('express');
const router = express.Router();


router.get('/',(req,res)=>{
    res.status(404).send('Not Found');
});

router.get('/dashboard',(req,res)=>{
    res.status(200).send('Dashboard called!!')
});  //controllers

router.get('/profile',(req,res)=>{
    res.status(200).send('Profile called!!')
});

module.exports = router;