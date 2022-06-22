import express from 'express'; 
import morgan from 'morgan'; 
import dotenv from 'dotenv';
import routerProductos from './routers/products'; 
dotenv.config(); 

const app = express(); 

app.use(morgan('dev')); 
app.use(express.urlencoded({extended:true})); 
app.use('/api/productos',routerProductos)


const PORT = process.env.PORT

const server = app.listen(PORT,() => {
    console.log(`Server on port ${server.address().port}`);
})
