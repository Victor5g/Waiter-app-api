import express, { Router } from 'express';
import  path  from 'node:path';
import multer from 'multer';

import { listCategories } from './app/useCases/categories/listCategory';
import { createCategories } from './app/useCases/categories/createCategory';
import { listProducts } from './app/useCases/poducts/listProducts';
import { createProduct } from './app/useCases/poducts/createProduct';

export const router = Router();

const upload = multer({
    storage: multer.diskStorage({
        destination(re, file, callback){
            callback(null, path.resolve(__dirname, '..', 'uploads'));
        },
        filename(re, file, callback){
            callback(null, `${Date.now()}-${file.originalname}`);
        }
    },)
});

router.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

router.get('/categories', listCategories);

router.post('/categories', createCategories);

router.get('/products', listProducts);

router.post('/products', upload.single('image'), createProduct);

router.post('/categories/:categoryId/products', (req, res) => {
    res.send('OK');
});

router.get('/orders', (req, res) => {
    res.send('OK');
});

router.post('/orders', (req, res) => {
    res.send('OK');
});

router.patch('/orders/:odersId', (req, res) => {
    res.send('OK');
});

router.delete('/orders/:odersId', (req, res) => {
    res.send('OK');
});

