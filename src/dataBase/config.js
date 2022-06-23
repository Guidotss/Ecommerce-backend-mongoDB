import dotenv from 'dotenv'; 
dotenv.config(); 

export default {
    mongoDB: {
        // eslint-disable-next-line no-undef
        URL: `mongodb+srv://guido:${process.env.DB_PASSWORD}@cluster0.wtvdvhi.mongodb.net/ecommerce?retryWrites=true&w=majority`,

        options:{
            useNewUrlParser:true,
            useUnifiedTopology:true
        }
    },
};