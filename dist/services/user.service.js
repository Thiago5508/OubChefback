import { User } from '@/models/user.model';
import bcrypt from 'bcryptjs';
export async function createUser(data) {
    const { name, email, password } = data;
    // Verifica se já existe
    const exists = await User.findOne({ email });
    if (exists)
        throw new Error('Usuário já existe');
    // Hash da senha
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
        name,
        email,
        password: hashedPassword,
    });
    await user.save();
    return user;
}
//# sourceMappingURL=user.service.js.map