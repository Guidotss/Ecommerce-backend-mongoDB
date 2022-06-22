import mongoose from 'mongoose';
import config from '../dataBase/config';

mongoose.connect(config.mongoDB.URL,config.mongoDB.options); 

export class Productos{
    constructor(collection,Schema){
        this.collection = mongoose.model(collectionName,Schema); 
    }


    async getAll(){
        const allProducts = await this.collection.find({}); 

        return allProducts;
    }
}