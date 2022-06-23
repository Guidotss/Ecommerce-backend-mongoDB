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

    async create(product){
        const productString = JSON.stringify(product); 
        let id  = 0; 

        if(productString != '{}'){
            await this.collection.create(product);
            return true; 
        }else{
            return false;
        }
    }

    async update(productId,obj){

        const product = await this.collection.find({_id:productId});
        const productString = JSON.stringify(product); 

        if(productString != '[]'){

            const updateProduct = await this.collection.updateOne({_id:productId},{
                $set:{nombre:obj.nombre,precio:obj.precio,url:obj.url,stock:obj.stock, timeStamp:obj.timeStamp}
            })

            console.log(product);

            return true
        }else{
            return false; 
        }
    }
    async deleteProduct(productId){
        if(productId != ''){
            const product = await this.collection.find({_id:productId}); 
            console.log(product);
            await this.collection.deleteOne({_id:productId}); 

            return true;
        }else{
            return false;
        }
    }
}