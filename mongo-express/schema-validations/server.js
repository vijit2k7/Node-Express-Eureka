require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const databaseStringUrl = process.env.DATABASE_URL;
mongoose.connect(databaseStringUrl).then(()=>{
    console.log('Mongodb connected');
},(err)=>{
    console.log('error',err);
});

const app = express();
const gameSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true, 
        minlength : 4,
        maxlength : 10,
        uppercase : true
    },
    publisher: {
        type:String,
        lowercase: true
    },
    tags: {
        type : [String],
        required: true,
        enum: ['Sports','Racing','FPS','Horror',"adventure"],
        validate:{
            validator:function (val,callback){
                setTimeout(() => {
                    const result = val.length >= 1;
                    callback(result);
                }, 2000);
            },
            message : "At least one category should be tagged!!"
        }
    },
    date: { type: Date, default: Date.now },
    onSale: Boolean,
    price:{
            type: Number,
            validate: {
                validator: (val)=>{
                    return val>10 & val<10000;
                },
                message: "Value should be between 10 and 10000"
            }
        }
});

const Game = mongoose.model('Game', gameSchema);

async function saveGame() {
    const game = new Game({
        title: "Games",
        publisher: "NiNtEndo",
        tags: [],
        onSale: false,
        price: 599.99,
    });
    try {
        const result = await game.save();
        console.log(result);
    } catch (error) {
        console.log('error is',error.message);
    }

}

saveGame();


app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})