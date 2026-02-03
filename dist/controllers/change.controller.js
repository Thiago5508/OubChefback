import { changePassword } from '../services/change.service.js';
export async function changePasswordController(req, res) {
    const userId = req.user?._id; // obtido do JWT pelo middleware
    const { oldPassword, newPassword } = req.body;
    if (!userId) {
        res.status(401).json({ error: 'Usuário não autenticado' });
        return;
    }
    try {
        const result = await changePassword(userId, oldPassword, newPassword);
        res.status(200).json(result);
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
}
//# sourceMappingURL=change.controller.js.map