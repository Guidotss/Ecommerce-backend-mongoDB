import {Router} from 'express'; 
import {cartDao as api} from '../daos/cartDao'; 

const router = Router(); 

router.get('/',async(req,res) =>{
    const cart = await api.getAll(); 
    res.json(cart); 
});  

router.post('/:id',async(req,res)=>{
    const {id}= req.params; 
    const addProduct =  await api.addProduct(id); 
    res.json(addProduct); 
}); 



export default router; 