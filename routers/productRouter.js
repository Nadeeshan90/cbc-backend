import express from "express";
import { createProduct, deleteProducts, getProducts, getProductsId, updateProducts } from "../controllers/productControllers.js";

const productRouter = express.Router();

productRouter.get("/",getProducts)

productRouter.post("/",createProduct)

productRouter.delete("/:productId",deleteProducts)

productRouter.put("/:productId",updateProducts)

productRouter.get("/:productId",getProductsId)
export default productRouter;