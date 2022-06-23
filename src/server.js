import express from 'express'; 
import morgan from 'morgan'; 
import dotenv from 'dotenv';
import routerProductos from './routers/products'; 
import routerCart from './routers/cart'; 

dotenv.config(); 

const app = express(); 

app.use(morgan('dev')); 
app.use(express.urlencoded({extended:true}));
app.use(express.json()); 
app.use('/api/productos',routerProductos); 
app.use('/api/carrito',routerCart); 


const PORT = process.env.PORT; 

const server = app.listen(PORT,() => {
    console.log(`Server on port ${server.address().port}`);
}); 
