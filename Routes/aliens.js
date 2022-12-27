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

module.exports=router;



