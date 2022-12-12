const bodyParser = require('body-parser');

const express = require('express'),
    app = express(),
    cors=require('cors'),
    mongoose= require('mongoose');
    mongoose.set('strictQuery', false);

require('dotenv').config();
const port=process.env.PORT || 4000;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

async function connecting(){
    try{
        await mongoose.connect(process.env.MONGO,{
            useUnifiedTopology:true,
            useNewUrlParser:true,
        });
        console.log('💡Connected to the DB')
    }catch(e){
        console.log('ERROR: Your DB is not running')
    }
};

connecting();

app.use(cors());

app.use('/users', require('./routes/usersRoute.js'))

app.listen(port,()=>console.log(`🚀🚀🚀 Server listening on port ${port}`))