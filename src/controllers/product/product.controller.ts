// src/controllers/product.controller.ts
import type { Request, Response } from "express";
import { createProductService } from "../../services/product/product.service.js";

export async function createProductController (req: Request, res: Response) {
    try {
      const user = req.user?._id; 
      const { name, description, basePrice,category } = req.body;

      if (!user || !name || !basePrice) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      const newProduct = await createProductService({
        user,
        name,
        description,
        basePrice,
        category
      });

      return res.status(201).json({message: "Produto criado com sucesso", newProduct});
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server product error" });
    }
  }

