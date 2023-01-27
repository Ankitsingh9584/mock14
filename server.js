const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const app=express();
app.use(express.json());
app.use(cors());

const userRoute=require("./routes/user")


app.get("/",(req,res)=>{
    res.send("hello server")
});

app.use("/user",userRoute)

app.listen("8080",async()=>{
    await mongoose.connect("mongodb+srv://ankit:ankit@cluster0.beo4ggn.mongodb.net/mock14");
    console.log("server started on port 8080")
})