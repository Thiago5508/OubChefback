import type { Request, Response } from 'express';
import { authenticateUser } from '../services/auth.service.js';

export async function loginController(req: Request, res: Response) {
  const { identifier, password } = req.body;

  try {
    const { token, user } = await authenticateUser(identifier, password);
    res.status(200).json({ message: 'Login bem-sucedido', user, token });
  } catch (err: any) {
    res.status(401).json({ error: err.message });
  }
}
