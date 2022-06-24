import mongoose from 'mongoose';
import {Productos as apiProductos} from './mongoClassProductos'; 
import {productsSchema} from '../models/productsModel'; 
import config from '../dataBase/config';


mongoose.connect(config.mongoDB.URL,config.mongoDB.options); 

export class Cart{
    constructor(collection,schema){
        this.collection = mongoose.model(collection,schema); 
    }

    async getCart(cartiId){
        const cart = await this.collection.find({_id:cartiId}); 
        return cart; 
    }

    async createCart(){
        
        const createCart = await this.collection.create({}); 
        return createCart.id;
    }
    
    async addProduct(cartId,productId){

        const checkCartId = cartId.split(''); 
        const checkProductId = productId.split(''); 

        if(checkCartId.length == 24 && checkProductId.length == 24){

            const productsId = new apiProductos('productos',productsSchema);
            const prodId = await productsId.findById(productId); 
            const prodIdArray = prodId.map(e =>e.id); 
        
            const cartID = await this.collection.find({_id:cartId}); 
            const cartIdArray = cartID.map(e =>e.id);  
            
            
    
            if(prodIdArray.includes(productId) && cartIdArray.includes(cartId)){
                
                const products  = new apiProductos('productos',productsSchema); 
                const product = await products.findById(productId);
                await this.collection.updateOne({_id:cartId},{
                    $push:{productos:product}
                }); 
    
                return true; 
            }else{
                return false; 
            }
        }else{
            return false; 
        }
    }
    async deleteCart(cartId){
        const cartIdString = JSON.stringify(cartId); 
        
        if(cartIdString != ''){
            await this.collection.deleteOne({_id:cartId}); 
            return true;
        }else{
            return false; 
        }
    }

    async deleteProduct(cartId,productId){
        const cartIdString = JSON.stringify(cartId); 
        const productIdString = JSON.stringify(productId); 

        if(cartIdString != '' && productIdString != ''){
            const products = new apiProductos('productos',productsSchema); 
            const product = await products.findById(productId); 
            await this.collection.updateOne({_id:cartId},{
                $pull:{productos:product}
            }); 

            return true; 
        }else{
            return false; 
        }
    }


}