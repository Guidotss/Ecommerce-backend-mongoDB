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
        const checkCartId = cartiId.split('');
        
        if(checkCartId.length == 24){
            
            const cart = await this.collection.find({_id:cartiId}); 
            const cartIdArray = cart.map(e => e.id); 

            if(cartIdArray.includes(cartiId)){
                return cart; 
            }
        }else{
            return undefined; 
        }
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
        const checkCartId = cartId.split(''); 

        if(checkCartId.length == 24){
            const cart = this.collection.find({_id:cartId}); 
            const cartIdArray = cart.map(e => e.id); 

            if(cartIdArray.includes(cartId)){

                await this.collection.deleteOne({_id:cartId}); 
                return true;

            }else{
                return false; 
            }
        }else{
            return false; 
        }
    }

    async deleteProduct(cartId,productId){


        const checkProductId = productId.split(''); 
        const checkCartId = cartId.split(''); 

        if(checkCartId.length == 24 && checkProductId.length == 24){

            const products = new apiProductos('productos',productsSchema); 
            const product = await products.findById(productId); 
            const productIdArray = product.map(e => e.id); 

            const cart = await this.collection.find({_id:cartId}); 
            const cartIdArray = cart.map(e => e.id);

            if(cartIdArray.includes(cartId) && productIdArray.includes(productId)){

                await this.collection.updateOne({_id:cartId},{
                    $pull:{productos:product}
                }); 
    
                return true; 
            }else{
                return false; 
            }

        }else{
            return false; 
        }
    }
}