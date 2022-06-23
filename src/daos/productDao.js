import dotenv from 'dotenv'; 


dotenv.config();



let ProdDao; 

// eslint-disable-next-line no-undef
switch(process.env.DB_NAME){
        
case 'mongoDB':
    
    import('./products/mongoDBProducts.js').then(({ProductDao})=>{
        ProdDao = new ProductDao(); 
    }); 
        
    break; 
}

export {ProdDao}; 