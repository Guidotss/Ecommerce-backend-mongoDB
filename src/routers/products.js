import {Router} from 'express'; 
import {ProdDao as api} from '../daos/index'

const router = Router(); 

router.get('/',async(req,res)=>{
    const allProduct = await api.getAll(); 
    res.json(allProduct)
}); 


router.post('/',async(req,res)=>{
    const addNewProduct = await api.create(req.body); 
    res.json({addNewProduct}); 
}); 

export default router; 