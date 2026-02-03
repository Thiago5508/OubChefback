import { createUser } from '@/services/user.service';
export async function createUserController(req, res) {
    try {
        const user = await createUser(req.body);
        res.status(201).json({
            message: 'Usuário criado com sucesso',
            user: { id: user._id, name: user.name, email: user.email },
        });
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
}
//# sourceMappingURL=user.controller.js.map