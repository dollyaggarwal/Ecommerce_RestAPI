import express from 'express';
import productRouter from './src/features/product/product.routes.js';
import userRouter from './src/features/user/user.routes.js';
import bodyParser from 'body-parser';

const server = express();

server.use(bodyParser.json());

//for all requests related to product, redirect to product routes.
server.use('/api/products', productRouter);

//for all requests related to user, redirect to user routes.
server.use('/api/users', userRouter);

server.get("/", (req, res) =>{
    res.send("Welcome to Ecommerce APIs");
})

server.listen(3300,()=>{
    console.log("Server is running at 3300");
});
