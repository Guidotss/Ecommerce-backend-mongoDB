import dotenv from 'dotenv'; 
import { Productos } from '../classes/mongoClassProductos.js';
import { ProductDao } from './products/mongoDBusers.js';

dotenv.config();



let ProdDao; 

switch(process.env.DB_NAME){
        
case 'mongoDB':
    import('./products/mongoDBusers').then(({ProductDao})=>{
        ProdDao = new ProductDao(); 
    })
    
        
    break; 
}

export {ProdDao}; 