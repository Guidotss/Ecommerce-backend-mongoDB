import dotenv from 'dotenv'; 


dotenv.config();



let ProdDao; 

switch(process.env.DB_NAME){
        
case 'mongoDB':
    
    import('./products/mongoDBusers.js').then(({ProductDao})=>{
        ProdDao = new ProductDao(); 
    }); 
        
    break; 
}

export {ProdDao}; 