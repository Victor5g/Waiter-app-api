import express, { Router } from 'express';
import  path  from 'node:path';
import multer from 'multer';

import { listCategories } from './app/useCases/categories/listCategory';
import { createCategories } from './app/useCases/categories/createCategory';
import { listProducts } from './app/useCases/poducts/listProducts';
import { createProduct } from './app/useCases/poducts/createProduct';
import { listProductsByCategory } from './app/useCases/categories/listProductsByCategory';
import { listOrder } from './app/useCases/orders/listOrders';
import { createOrder } from './app/useCases/orders/createOrder';
import { changeOrderStatus } from './app/useCases/orders/changeOrderStatus';
import { cancelOrder } from './app/useCases/orders/cancelOrder';

export const router = Router();

const upload = multer({
    storage: multer.diskStorage({
        destination(_, __, callback){
            callback(null, path.resolve(__dirname, '..', 'uploads'));
        },
        filename(_, file, callback){
            callback(null, `${Date.now()}-${file.originalname}`);
        }
    },)
});

router.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

router.get('/categories', listCategories);

router.post('/categories', createCategories);

router.get('/products', listProducts);

router.post('/products', upload.single('image'), createProduct);

router.get('/categories/:categoryId/products', listProductsByCategory);

router.get('/orders', listOrder);

router.post('/orders', createOrder);

router.patch('/orders/:orderId', changeOrderStatus);

router.delete('/orders/:orderId', cancelOrder);

