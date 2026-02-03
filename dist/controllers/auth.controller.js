import { authenticateUser } from '@/services/auth.service';
export async function loginController(req, res) {
    const { identifier, password } = req.body;
    try {
        const { token, user } = await authenticateUser(identifier, password);
        res.status(200).json({ message: 'Login bem-sucedido', user, token });
    }
    catch (err) {
        res.status(401).json({ error: err.message });
    }
}
//# sourceMappingURL=auth.controller.js.map