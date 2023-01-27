const express=require("express");
const app=express();
app.use(express.json());

const userModel=require("../model/user");

app.post("/",async(req,res)=>{
await userModel.create(req.body);
    res.send({msg:"ok"})
})
app.post("/get",async(req,res)=>{
    console.log(req.body)
 let res1=await userModel.findOne({name:req.body.name});
 console.log(res1)
        res.send({msg:"ok",data:res1.level})
    })
app.get("/random",(req,res)=>{
  const result=  Math.random().toString(36).substring(2,7)
    res.send({string:result})
})



module.exports=app;