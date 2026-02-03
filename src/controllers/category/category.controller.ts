import type { Request, Response } from "express";
import { categoryService } from "../../services/category/category.service.js";

export async function createCategoryController(req: Request, res: Response) {
    const userId = req.user?._id; 
    const { name } = req.body;

    if (!userId || !name?.trim()) {
      return res.status(400).json({ error: "Missing required fields" });
    }
  try {
    const category = await categoryService.create( { user:userId, name:name.trim()} );
    return res.status(201).json(category);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal server error" });
  }
}