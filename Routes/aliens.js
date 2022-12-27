const express=require('express');
const schema_obj = require('../models/elements_schema');


const router=express.Router();

router.get('/', async (req,res)=>{
    try{

        const aliens=await schema_obj.find();
        res.json(aliens);

    }catch(err){
        res.send("Error"+err)
    }
})

router.post('/',async (req,res)=>{
    const a1= new schema_obj({
        name:req.body.name,
        tech:req.body.tech,
        sub:req.body.sub
    })

    try{
        const a2=await a1.save();
        res.json(a2)


    }catch(err){
        res.send('Error'+err)
    }
})

module.exports=router;



