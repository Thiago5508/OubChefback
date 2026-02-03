import type { Request, Response } from "express";
import { createWaiterService } from "../../services/waiter/waiter.service.js";

export async function createWaiterController(req: Request, res: Response) {
  const userId = req.user?._id;
  const { name } = req.body;

  if (!userId || !name) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const waiter = await createWaiterService({
      user: userId,
      name
    });

    return res.status(201).json({message:'Funcionario adicionado com sucesso',waiter});
  } catch (error: any) {
    console.error(error);

    if (error.code === 11000) {
      return res.status(400).json({ error: "Waiter name already exists" });
    }

    return res.status(500).json({ error: "Internal server error" });
  }
}
