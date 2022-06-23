import dotenv from 'dotenv'; 

dotenv.config();



let ProdDao; 

switch(process.env.DB_NAME){
        
case 'mongoDB':
    import('./products/mongoDBusers').then(({ProductDao}) =>{
        ProdDao = new ProductDao();  
    });
    
        
    break; 
default:
    console.log('hola');
}

export {ProdDao}; 