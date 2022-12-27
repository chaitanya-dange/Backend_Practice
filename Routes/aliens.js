const express=require('express');

const router=express.Router();

router.get('/', ()=>{
    console.log('in route folder and get is used')
})

module.exports=router;



