import type { Request, Response } from "express";
import { createTipService } from "@/services/tip/tip.service";

export async function createTipController(req: Request, res: Response) {
  try {
    const userId = req.user?._id;
    const { waiter, value } = req.body;

    if (!userId || !waiter || !value) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const tip = await createTipService({
      user: userId,
      waiter,
      value
    });

    return res.status(201).json(tip);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
