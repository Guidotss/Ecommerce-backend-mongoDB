import mongoose from 'mongoose';
import config from '../dataBase/config';

mongoose.connect(config.mongoDB.URL,config.mongoDB.options); 

export class Productos{
    constructor(collection,Schema){
        this.collection = mongoose.model(collection,Schema); 
    }


    async getAll(){
        const allProducts = await this.collection.find({}); 

        return allProducts;
    }

    async create(obj){
        const newProduct = await this.collection.create(obj); 
        return newProduct; 
    }

    async update(PoductId,obj){
        const updateProduct = await this.collection.updateOne({id:PoductId},{
            $set:{obj}
        }); 

        return updateProduct; 
    }
}