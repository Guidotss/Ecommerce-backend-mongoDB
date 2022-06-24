import mongoose from 'mongoose';

export const cartSchema = new mongoose.Schema({
    productos:{type:Array,required:true}
}); 
