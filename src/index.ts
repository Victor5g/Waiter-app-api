import express from 'express';
import mongoose from 'mongoose';

import { router } from './router';

const CONFIG = { port: 5000 };

const app = express();

mongoose.connect('mongodb://localhost:27017')
    .then(() => {
        console.log('# Connected DB');

        app.use(express.json());
        app.use(router);
        app.listen(CONFIG.port, () => {
            console.log(`# Server is running in port ${CONFIG.port}`);
        });
    })
    .catch(() => console.log('# Error connection DB'));
