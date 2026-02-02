import type { Request, Response } from "express";
import { createItemService } from "@/services/item/item.service";

export async function createItemController(req: Request, res: Response) {
  const user = req.user?._id;

  if (!user) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const { order, products, size, ingredients, price, quantity } = req.body;

  if (!order || !products || !size || !price) {
    return res.status(400).json({
      error: "Missing required fields: order, products, size, price"
    });
  }

  try {
    const item = await createItemService({
      user,
      order,
      products,
      size,
      ingredients,
      price,
      quantity
    });

    return res.status(201).json(item);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
