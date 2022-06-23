import dotenv from 'dotenv'; 

dotenv.config();



let userDao; 

switch(process.env.DB_NAME){
        
case 'mongoDB':
    import('./users/mongoDBusers').then(({ProductDao}) =>{
        userDao = new ProductDao(); 
    });
    
        
    break; 
default:
    console.log('hola');
}

export {userDao}; 