import type { Request, Response } from "express";
import { detailCategoryService } from "../../services/category/detail.category.service.js";

export async function detailCategoryController(req: Request, res: Response) {
  const user = req.user?._id;

  if (!user) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const { CategoryId } = req.params;

  if (!CategoryId) {
    return res.status(400).json({ error: "Missing orderId param!" });
  }
  try {
    const items = await detailCategoryService(CategoryId,user);
    return res.status(200).json(items);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal server error!" });
  }
}
