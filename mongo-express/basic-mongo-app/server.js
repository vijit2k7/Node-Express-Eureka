require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const initialRouter = require('./routes/initialRoutes');

const databaseStringUrl = process.env.DATABASE_URL;
mongoose.connect(databaseStringUrl).then(()=>{
    console.log('Mongodb connected');
},(err)=>{
    console.log('error',err);
});

const app = express();

app.use(express.json());
app.use('/api',initialRouter);

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})