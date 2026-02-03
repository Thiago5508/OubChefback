import type { Request, Response } from "express";
import { listProductService } from "@/services/product/listproduct.service";

export async function listProductController(req: Request, res: Response) {
  const user = req.user?._id;
  const active = true as boolean

  if (!user) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  try {
    const items = await listProductService (active,user);

    return res.status(200).json(items);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
