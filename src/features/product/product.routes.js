//Manage routes/paths to ProductController

//1. Import express
import express from "express";
import ProductController from "./product.controller.js";
import {upload} from '../../middlewares/fileupload.middleware.js'

//2. Initialise Express router
const productRouter = express.Router();

const productController = new ProductController();

//localhost/api/products
productRouter.get('/', productController.getAllProduct);
productRouter.post('/', upload.single('imageUrl'),productController.addProduct);
productRouter.get('/:id', productController.getOneProduct);

//localhost:3200/api/products/filter?minPrice=10&maxPrice=20&category=Category1
productRouter.get('/filter', productController.filterProducts);

export default productRouter;