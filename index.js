const express=require('express')
const app=express()
const port=5000

app.get('/testing',(req,res)=>{
    res.send({
        'message':'server started'
    })
})

app.listen(port,()=>{
    console.log('server is runing on port 5000');
})