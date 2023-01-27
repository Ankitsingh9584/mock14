const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
require("dotenv").config();
const app=express();
app.use(express.json());
app.use(cors());

const userRoute=require("./routes/user")


app.get("/",(req,res)=>{
    res.send("hello server")
});

app.use("/user",userRoute)

app.listen("8080",async()=>{
    await mongoose.connect(process.env.DB_CONN);
    console.log("server started on port 8080")
})