import { Request, Response } from 'express';

import { Order } from '../../models/Order';

export const listOrder = async (req: Request, res: Response) => {
    try {

        const orders =  await Order.find()
            .sort({createAt: 1})
            .populate('products.product');

        res.status(200).json(orders);
    } catch (error) {
        res.sendStatus(500);
    }
};
