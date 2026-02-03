import { User } from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET não definido');
}
const JWT_SECRET = process.env.JWT_SECRET;
export async function authenticateUser(identifier, password) {
    if (!identifier.email && !identifier.phone) {
        throw new Error('Email ou telefone é obrigatório');
    }
    const orConditions = [];
    if (identifier.email) {
        orConditions.push({ email: identifier.email });
    }
    if (identifier.phone) {
        orConditions.push({ phone: identifier.phone });
    }
    const user = await User.findOne({
        $or: orConditions
    });
    if (!user)
        throw new Error('Usuário não encontrado');
    if (!user.active) {
        throw new Error('Conta desativada');
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch)
        throw new Error('Senha inválida');
    // Cria o token JWT
    const token = jwt.sign({ _id: user._id, email: user.email, phone: user.phone, name: user.name, responsibility: user.responsibility }, JWT_SECRET, { expiresIn: '12h' });
    return { token, user: { id: user._id, name: user.name, email: user.email, phone: user.phone, responsibility: user.responsibility } };
}
//# sourceMappingURL=auth.service.js.map