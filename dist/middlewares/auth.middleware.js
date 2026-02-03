import jwt from 'jsonwebtoken';
const SECRET = process.env.JWT_SECRET || '';
export function authMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        res.status(401).json({ error: 'Token não fornecido' });
        return;
    }
    const token = authHeader.split(' ')[1];
    if (!token) {
        res.status(401).json({ error: "Token inválido" });
        return;
    }
    try {
        const decoded = jwt.verify(token, SECRET);
        req.user = decoded; // adiciona info do usuário na requisição
        next();
    }
    catch {
        res.status(401).json({ error: 'Token inválido' });
    }
}
//# sourceMappingURL=auth.middleware.js.map