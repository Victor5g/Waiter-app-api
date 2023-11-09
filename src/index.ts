import express from 'express';
import mongoose from 'mongoose';

const CONFIG = { port: 5000 };

const app = express();

mongoose.connect('mongodb://localhost:27017')
    .then(() => {
        console.log('# Connected DB');
        app.listen(CONFIG.port, () => {
            console.log(`# Server is running in port ${CONFIG.port}`);
        });
    })
    .catch(() => console.log('# Error connection DB'));
