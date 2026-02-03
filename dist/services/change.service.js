import { User } from '@/models/user.model';
import bcrypt from 'bcryptjs';
export async function changePassword(userId, oldPassword, newPassword) {
    // Busca usuário pelo id
    const user = await User.findById(userId);
    if (!user)
        throw new Error('Usuário não encontrado');
    // Verifica senha antiga
    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch)
        throw new Error('Senha antiga incorreta');
    // Hash da nova senha
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();
    return { message: 'Senha alterada com sucesso' };
}
//# sourceMappingURL=change.service.js.map