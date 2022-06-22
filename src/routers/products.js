import { Router } from 'express';
import apiProductos from '../classes/mongoClassProductos'; 
import {productsModel} from '../models/productsModel'; 
import userDao from '../daos/index'; 

const api = new userDao(); 


const router = Router(); 

router.get('/',async(req,res) => {
    const allProducts = await api.getAll();  
}); 



export default router; 