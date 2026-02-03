import type { Request, Response } from "express";
import { listItemsByOrderService } from "../../services/item/listbyorder.service.js";

export async function listItemsByOrderController(req: Request, res: Response) {
  const user = req.user?._id;

  if (!user) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const { orderId } = req.params;

  if (!orderId) {
    return res.status(400).json({ error: "Missing orderId param" });
  }
  try {
    const items = await listItemsByOrderService(orderId,user);

    return res.status(200).json(items);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
