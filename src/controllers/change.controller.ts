import type { Request, Response } from 'express';
import { changePassword } from '@/services/change.service';

export async function changePasswordController(req: Request, res: Response):Promise<void> {
  const userId = req.user?._id; // obtido do JWT pelo middleware
  const { oldPassword, newPassword } = req.body;

  if (!userId){
    res.status(401).json({ error: 'Usuário não autenticado' });
    return 
  }

  try {
    const result = await changePassword(userId, oldPassword, newPassword);
    res.status(200).json(result);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
}
