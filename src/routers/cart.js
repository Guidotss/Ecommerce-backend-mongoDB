import {Router} from 'express'; 
import {cartDao as api} from '../daos/cartDao'; 

const router = Router(); 

router.get('/:cartId',async(req,res) =>{

    const {cartId} = req.params; 
    const cart = await api.getCart(cartId); 

    if(cart != undefined){
        return res.json({carrito:cart}); 
    }else{
        return res.json({Error:`El ID:${cartId} es incorrecto`}); 
    }
});  

router.post('/',async(req,res)=>{

    const cart = await api.createCart();

    if(cart != undefined){
        return res.json({Mensaje:`Carrito creado con exito. ID:${cart}`}); 
    }else{
        return res.json({Mensaje:'Error al crear el carrito'}); 
    }
}); 

router.post('/:cartId/productos/:productId',async(req,res)=>{
    const {cartId,productId}= req.params; 
    const addProduct =  await api.addProduct(cartId,productId); 

    if(addProduct){
        return res.json({Mensaje:'Producto agregado con exito'}); 
    }else{
        return res.json({Error:'Error al agregar producto'}); 
    }
    
});

router.delete('/:cartId',async(req,res)=>{
    const {cartId} = req.params; 
    const product = await api.deleteCart(cartId); 
    if(product){
        return res.json({Mensaje:'Carrito eliminado con exito'}); 
    }else{
        return res.json({Error:`El ID:${cartId} es incorrecto`}); 
    }
}); 

router.delete('/:cartId/productos/:productId',async(req,res)=>{
    const {cartId,productId} = req.params; 
    const deleteProduct = await api.deleteProduct(cartId,productId); 
    if(deleteProduct){
        return res.json({Mensaje:'Producto eliminado con exito'}); 
    }else{
        return res.json({Error:'El ID del carrito o bien el del producto es incorrecto'});    
    }

}); 



export default router; 