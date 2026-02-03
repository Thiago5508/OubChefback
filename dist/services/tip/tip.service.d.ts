export declare function createTipService(data: {
    user: string;
    waiter: string;
    value: number;
}): Promise<import("mongoose").Document<unknown, {}, import("@/models/tip.model").ITip, {}, import("mongoose").DefaultSchemaOptions> & import("@/models/tip.model").ITip & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}>;
//# sourceMappingURL=tip.service.d.ts.map