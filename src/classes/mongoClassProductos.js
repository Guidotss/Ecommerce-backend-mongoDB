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

    async create(newProduct){
        const productString = JSON.stringify(newProduct); 
        
        if(productString != '{}'){

            const addNewproduct = await this.collection.create(newProduct);
            return addNewproduct; 

        }else{
            return undefined;
        }
    }

    async update(productId,obj){

        const checkProductId = productId.split(''); 

        if(checkProductId.length == 24){

            const product = await this.collection.find({_id:productId});
            const productIdArray = product.map(e => e.id); 
            
            if(productIdArray.includes(productId)){
                const productString = JSON.stringify(product); 
    
                if(productString != '[]'){
    
                    await this.collection.updateOne({_id:productId},{
                        $set:{nombre:obj.nombre,precio:obj.precio,url:obj.url,stock:obj.stock, timeStamp:obj.timeStamp}
                    });
    
                    return true; 
    
                }else{
                    return false;   
                }            
            }else{
                return false; 
            }            
        }else{
            return false; 
        }
    }

    async deleteProduct(productId){

        const checkProductId = productId.split(''); 

        if(checkProductId.length == 24){

            const product = await this.collection.find({_id:productId}); 
            const productIdArray = product.map(e => e.id); 

            if(productIdArray.includes(productId)){

                await this.collection.deleteOne({_id:productId}); 
                return true; 
                
            }else{
                return false; 
            }
        }else{
            return false; 
        }
    }

    async findById(productId){

        const checkProductId = productId.split(''); 

        if(checkProductId.length == 24){
            const product = await this.collection.find({_id:productId}); 
            const productIdArray = product.map(e => e.id); 

            if(productIdArray.includes(productId)){
                return product; 
            }else{
                return undefined; 
            }           

        }else{
            return undefined; 
        }
    }
}