import type { Request, Response, NextFunction } from 'express';
export interface JwtPayload {
    _id: string;
    email: string;
}
export declare function authMiddleware(req: Request, res: Response, next: NextFunction): void;
//# sourceMappingURL=auth.middleware.d.ts.map