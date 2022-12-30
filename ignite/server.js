const express=require('express');
const app =express();

var bodyParser=require('body-parser');
app.use(bodyParser());


app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})

app.post('/submit',(req,res)=>{
    var fname=req.body.ab+" "+req.body.bc+" "+req.body.cd
    res.send(fname)
})

app.listen(7000,()=>{
    console.log("conneted to server 7000")
})
