export declare function createUser(data: {
    name: string;
    email: string;
    password: string;
}): Promise<import("mongoose").Document<unknown, {}, import("../models/user.model.js").IUser, {}, import("mongoose").DefaultSchemaOptions> & import("../models/user.model.js").IUser & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}>;
//# sourceMappingURL=user.service.d.ts.map