const { json } = require('express');
const express=require('express');
const app= express();

const mongoose=require('mongoose');


const url='mongodb://127.0.0.1:27017/selfDB02'
// there should be no space else it will throw error.
// open cmd and type mongo and will get url and after 27017/<newdata base> to create new database.

mongoose.connect(url,{useNewUrlParser:true})
const con=mongoose.connection

con.on('open',()=>{
    console.log('connected......')
})

//middleware is need to connect between app.js and alien.js file so

app.use(express.json())

const alienRouter = require('./Routes/aliens');// this can be directly insert in app.use but for clarity are seperate.

app.use('/aliens',alienRouter)// '/alien' will be written in url: http://localhost:9000/alien(this can be anything)


app.listen(3000,()=>{
    console.log('listening to port 3000');
})

