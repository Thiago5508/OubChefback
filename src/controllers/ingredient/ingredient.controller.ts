import type { Request, Response } from "express";
import { createIngredientService } from "@/services/ingredient/ingredient.service";

export async function createIngredientController(req: Request, res: Response) {
  try {
    const userId = req.user?._id;
    const { category, name, extraPrice } = req.body;

    if (!userId || !category || !name) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const ingredient = await createIngredientService({
      user: userId,
      category,
      name,
      extraPrice
    });

    return res.status(201).json({message:'Ingrediente criado com sucesso' ,ingredient});
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
