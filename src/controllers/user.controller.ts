import type { Request, Response } from 'express';
import { createUser } from '../services/user.service.js';

export async function createUserController(req: Request, res: Response) {
  try {
    const user = await createUser(req.body);
    res.status(201).json({
      message: 'Usuário criado com sucesso',
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
}
