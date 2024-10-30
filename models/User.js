import mongoose from "mongoose";
//Schema for dashboard

const schema=new mongoose.Schema({
  name:{type:String},
  email:{type:String,required:true},
  username:{type:String,required:true},
  profilePic:{type:String},
  coverPic:{type:String},
  createdAt:{type:Date,default:Date.now},
  updatedAt:{type:Date,default:Date.now},
  razorpayid:{type:String},
  razorpaysct:{type:String},
})

export default mongoose.models.User||mongoose.model('User',schema);;