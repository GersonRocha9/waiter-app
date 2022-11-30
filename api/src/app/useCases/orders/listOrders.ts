import { Request, Response } from "express";

import { Order } from "../../models/Order";

export async function listOrders(req: Request, res: Response) {
  try {
    const orders = await Order.find()
      .sort({ createdAt: 1 }) // ordem decrescente (-1) | ordem crescente (1)
      .populate("products.product"); // populate serve pra popular todos os dados de produtos, apenas com o ID

    res.json(orders);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}
