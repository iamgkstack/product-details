import express from 'express';
import productController from '../controllers/productController';
const router = express.Router();

router.get('/all', [productController.fetchProducts]);

router.get('/byType', [productController.fetchTypes]);

router.get('/type/:name', [productController.fetchByType])

module.exports = router;