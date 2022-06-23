import dotenv from 'dotenv'; 
dotenv.config(); 

let cartDao; 

switch(process.env.DB_NAME){
case 'mongoDB':
    import('./cart/mongoDBCart.js').then(({CartDao})=>{
        cartDao = new CartDao(); 
    })
        
}

export {cartDao}; 