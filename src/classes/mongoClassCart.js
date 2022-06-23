import mongoose from 'mongoose';
import {Productos as apiProductos} from './mongoClassProductos'; 
import {productsSchema} from '../models/productsModel'; 
import config from '../dataBase/config';


mongoose.connect(config.mongoDB.URL,config.mongoDB.options); 

export class Cart{
    constructor(collection,schema){
        this.collection = mongoose.model(collection,schema); 
    }

    async getAll(){
        const cart = await this.collection.find({}); 
        return cart; 
    }

    async createCart(){
        
        const createCart = await this.collection.create([]); 
        return createCart; 
    }
    
    async addProduct(productId){
        const productIdString = JSON.stringify(productId); 

        if(productIdString != '{}'){
            const products  = new apiProductos('productos',productsSchema); 
            const product = await products.findById(productId);
            const addProduct = await this.collection.create({productos:product}); 
            
            return addProduct; 
        }
    }
}