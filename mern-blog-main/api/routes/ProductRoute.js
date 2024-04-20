import express from 'express';
import { createProduct ,getProduct,findProductByName } from '../controllers/ProductController';

const router = express.Router();


router.post("/", upload.single("image"), createProduct);
router.get("/", getProduct);
router.get('/product', findProductByName);

export default router;