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
    if(product != undefined){
        return res.json({Productos: product}); 
    }else{
        return res.json({Error:`El ID:${id} es incorrecto o no se encuentra dentro de la lista de productos`})
    }
}); 


router.post('/',async(req,res)=>{
    const newProduct = req.body; 
    const addNewProduct = await api.create(newProduct); 

    if(addNewProduct != undefined){
        return res.json({addNewProduct}); 
    }else{
        return res.json({Error:'No se ha podido agregar el producto'}); 
    }
}); 

router.put('/:id',async(req,res)=>{
    const {id} = req.params; 
    const product = req.body; 
    const updateProduct = await api.update(id,product); 

    if(updateProduct){
        return res.json({Mensaje:'Producto actualizado con exito'}); 
    }else{
        return res.json({Error:'No se ha podido actualizar el producto'}); 
    }
}); 

router.delete('/:id',async(req,res)=>{
    const {id} = req.params; 
    const deleteProduct = await api.deleteProduct(id); 

    if(deleteProduct){
        return res.json({Mensaje:'Producto eliminado con exito'}); 
    }else{
        return res.json({Error:'El producto no se ha podido eliminar'});
    }
});

export default router; 