const express=require('express')
const route=require('./routes/route')
const mongoose= require('mongoose')
const app= express();

app.use(express.json())

mongoose.connect("mongodb+srv://harshita1:HV8WXEqwmkGdfP0o@harshita.c31chtf.mongodb.net/harshitadb?retryWrites=true&w=majority",{
 useNewUrlParser:true
})
.then(()=> console.log("Mongodb is connected"))
.catch(err=>console.log(err))

app.use('/', route)

app.listen(3000, function(){
    console.log(`Express app runing on port ` +(3000))
})
