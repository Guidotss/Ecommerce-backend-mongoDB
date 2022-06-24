import {Router} from 'express'; 
import {ProdDao as api} from '../daos/productDao'; 

const router = Router(); 

router.get('/',async(req,res)=>{
    const allProducts = await api.getAll(); 
    return res.json(allProducts); 
}); 

router.get('/:id',async(req,res) =>{
    const {id} = req.params; 
    const product = await api.findById(id); 
    return res.json(product); 
}); 


router.post('/',async(req,res)=>{
    const addNewProduct = await api.create(req.body); 
    if(addNewProduct){
        return res.json({Producto:req.body}); 
    }else{
        return res.json({Mensaje:'No se ha podido agregar el producto'}); 
    }
}); 

router.put('/:id',async(req,res)=>{
    const {id} = req.params; 
    const obj = req.body; 
    const updateProduct = await api.update(id,obj); 

    if(updateProduct){
        return res.json({Mensaje:'Producto actualizado con exito'}); 
    }else{
        return res.json({Mensaje:'El producto no se puede actualizar'}); 
    }
}); 

router.delete('/:id',async(req,res)=>{
    const {id} = req.params; 
    const deleteProduct = await api.deleteProduct(id); 

    if(deleteProduct){
        return res.json({Mensaje:'Producto eliminado con exito'}); 
    }else{
        return res.json({Mensaje:'El producto no se ha podido eliminar'});
    }
});

export default router; 