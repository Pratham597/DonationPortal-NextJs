import mongoose from "mongoose";
const schema =new mongoose.Schema({
    name:{type:String,required:true},
    to_user:{type:String,require:true},
    oid:{type:String,require:true},
    message:{type:String,require:true},
    amount:{type:Number,require:true},
    createdAt:{type:Date,default:Date.now},
    updatedAt:{type:Date,default:Date.now},
    done:{type:Boolean,default:false},
})
export default mongoose.models.Payment||mongoose.model('Payment',schema);
