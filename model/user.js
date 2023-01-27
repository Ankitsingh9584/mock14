const {Schema,model} =require("mongoose");

const userSchema=new Schema({
    name:String,
    level:String
})


const userModel=model("user",userSchema);

module.exports=userModel;