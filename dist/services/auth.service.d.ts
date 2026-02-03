type AuthIdentifier = {
    email?: string;
    phone?: string;
};
export declare function authenticateUser(identifier: AuthIdentifier, password: string): Promise<{
    token: string;
    user: {
        id: import("mongoose").Types.ObjectId;
        name: string;
        email: string;
        phone: string;
        responsibility: "gerente" | "chef" | "waiter";
    };
}>;
export {};
//# sourceMappingURL=auth.service.d.ts.map