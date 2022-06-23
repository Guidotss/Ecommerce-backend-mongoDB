import {Router} from 'express'; 
import {userDao as api} from '../daos/index'; 


const router = Router(); 

router.get('/',async(req,res)=>{
    const allProducts = await api.getAll(); 
    res.json({allProducts}); 
}); 


router.post('/',async(req,res)=>{
    const addNewProduct = await api.create(req.body); 
    res.json({addNewProduct}); 
}); 

export default router; 