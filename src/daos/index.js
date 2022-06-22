import dotenv from 'dotenv'; 
dotenv.config();



export let userDao = async function(){
    switch(process.env.DB_NAME){
        
    case 'mongoDB':
        import('./users/mongoDBusers').then(({ProductosDao})=>{
            userDao = new ProductosDao(); 
        }); 
        
        break; 
    }
}

