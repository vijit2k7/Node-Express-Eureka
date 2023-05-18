const express = require('express');
const router = express.Router();
const InitialModel =  require('../models/initialModel');

//Post Method

router.post('/post',async (req, res) => {
    const dataToSave = new InitialModel(req.body);
    try {
        const data = await dataToSave.save();
        res.send(data);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
});

//Get all Method
router.get('/getAll',async (req, res) => {
    
    try {
        const data =  await InitialModel.find();
        res.send(data);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }

})

//Get by ID Method
router.get('/getOne/:name',async (req, res) => {
    const name = req.params.name;
    try {
        const data =await InitialModel.find({name:name});
        res.send(data);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
})

//Update by ID Method
router.patch('/update/:id',async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    try {
        const data = await InitialModel.findByIdAndUpdate(id,body);
        console.log('data is',data);
        res.send(data);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
})

//Delete by ID Method
router.delete('/delete/:id',async (req, res) => {
    const id = req.params.id;
    try {
        const data = await InitialModel.findByIdAndDelete(id);
        res.send(data);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }

})


module.exports = router;

