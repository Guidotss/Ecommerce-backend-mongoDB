import mongoose from 'mongoose';

export const productsSchema = new mongoose.Schema({
    nombre:{type:String,required:true},
    precio:{type:Number,required:true},
    url:{type:String,required:true},
    stock:{type:Number,default:0},
    timeStamp:{type:Date,default:Date.now}
}); 
