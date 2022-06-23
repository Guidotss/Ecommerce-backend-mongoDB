import {Router} from 'express'; 
import {ProdDao as api} from '../daos/index'

const router = Router(); 

router.get('/',async(req,res)=>{
  const allProducts = await api.getAll(); 
  res.json(allProducts); 
}); 


router.post('/',async(req,res)=>{
    const addNewProduct = await api.create(req.body); 
   if(addNewProduct){
        res.json({Producto:req.body}); 
    }else{
        res.json({Mensaje:'No se ha podido agregar el producto'}); 
    }
}); 

router.put('/:id',async(req,res)=>{
    const {id} = req.params; 
    const obj = req.body; 
    const updateProduct = await api.update(id,obj); 

    if(updateProduct){
        res.json({Mensaje:'Producto actualizado con exito'}); 
    }else{
        res.json({Mensaje:'El producto no se puede actualizar'}); 
    }
}); 

router.delete('/:id',async(req,res)=>{
    const {id} = req.params; 
    const deleteProduct = await api.deleteProduct(id); 

    if(deleteProduct){
        res.json({Mensaje:'Producto eliminado con exito'}); 
    }else{
        res.json({Mensaje:'El producto no se ha podido eliminar'});
    }
})

export default router; 