const fs=require('fs');

// this are sync method of file system.


fs.writeFileSync("text.txt",'welcome to file system!!!')
//there is no file as text.txt , then file will be created and if present then data will be overwrite

// to append 
fs.appendFileSync('text.txt','this is awesome')

var data=fs.readFileSync('text.txt')
console.log(data);
console.log(data.toString());


//async method

// here in writeFile, async funtion has only one argument.

fs.writeFile('abc.txt',"enjoying this beautiful life",(err)=>{
    console.log(err)
})


// here in ReadFile, async funtion has two argument.

const data1= fs.readFile('abc.txt',(err,data)=>{
    if(err){
        console.log('error is '+err)
    }
        console.log(data.toString());
    
})
