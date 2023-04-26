import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
 name:{
    type:String,
    required:true,
    min:3,
    max:25
 },
 email:{
    type:String,
    required: true,
    trim: true,
    unique:true,
    lowercase: true
    
 },
 passward:{
    type:String,
    required:true,
 },
 phone:{
    type:String,
    required:true,
    min:10,
 },
 address:{
    type:String,
    required:true,
 },
});

const User = mongoose.model("user",userSchema);

export default User;