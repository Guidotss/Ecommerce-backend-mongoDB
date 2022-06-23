import {Router} from 'express'; 
import {cartDao as api} from '../daos/cartDao'; 

const router = Router(); 

router.get('/:cartId',async(req,res) =>{
    const {cartId} = req.params; 
    const cart = await api.getCart(cartId); 
    res.json({carrito:cart}); 
});  

router.post('/',async(req,res)=>{
    const cart = await api.createCart(); 
    if(cart != undefined){
        res.json({Mensaje:`Carrito creado con exito. ID:${cart}`}); 
    }else{
        res.json({Mensaje:'Error al crear el carrito'}); 
    }
})

router.post('/:cartId/productos/:productId',async(req,res)=>{
    const {cartId,productId}= req.params; 
    const addProduct =  await api.addProduct(cartId,productId); 
    if(addProduct){
        res.json({Mensaje:'Producto agregado con exito'}); 
    }else{
        res.json({Mensaje:'Error al agregar producto'}); 
    }
    
});

router.delete('/:cartId',async(req,res)=>{
    const {cartId} = req.params; 
    const product = await api.deleteCart(cartId); 
    if(product){
        res.json({Mensaje:'Carrito eliminado con exito'}); 
    }else{
        res.json({Mensaje:'Error al eliminar el carrito'}); 
    }
})

router.delete('/:cartId/productos/:productId',async(req,res)=>{
    const {cartId,productId} = req.params; 
    const deleteProduct = await api.deleteProduct(cartId,productId); 
    if(deleteProduct){
        res.json({Mensaje:'Producto eliminado con exito'}); 
    }else{
        res.json({Mensaje:'Error al eliminar el producto'});    
    }

})



export default router; 