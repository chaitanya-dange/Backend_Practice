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

