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

router.get('/:id',async (req,res)=>{
    try{

        const a3=await schema_obj.findById(req.params.id);//since we are passing it by url so we should use req.param and req.not body
        res.send(a3)

    }catch(err){
        res.send('Error'+err)
    }
})

// in case of patch 1st need to get particular obj/element from database and then make change and save back to database.

router.patch('/:id', async (req,res)=>{
    try{
        const a4= await schema_obj.findById(req.params.id)
        a4.sub=req.body.sub;//here sub is subscription 
        const a5= await schema_obj.save();
        res.json(a5);
        //there are some issue with this patch,what if element you are mentioning is not in database, what if don' t want to change sub but tech or name.

       
    }catch(err){
        res.send('error'+err);
    }
})


router.patch('/:id', async (req,res)=>{
    try{
        const a1= await schema_obj.findByIdAndDelete(req.params.id);
        res.send('Deleted.....')
        
       
    }catch(err){
        res.send('error'+err);
    }
})

module.exports=router;



