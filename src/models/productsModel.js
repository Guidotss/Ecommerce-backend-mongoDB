import mongoose from 'mongoose';

export const productsSchema = new mongoose.Schema({
    nombre:{
        type:String,
        required:true
    },
    precio:{
        type:Number,
        requiered:true
    },
    url:{
        type:String,
        requiered:true
    },
    stock:{
        type:Number,
        default:0
        
    },
    timeStamp:{
        type:Date,
        default:Date.now
    }
}); 

export const productsModel = mongoose.model(productsSchema,'productos'); 