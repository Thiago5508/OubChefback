export declare function createSizeService(data: {
    user: string;
    category: string;
    name: string;
    price: number;
}): Promise<import("mongoose").Document<unknown, {}, import("@/models/size.model").ISize, {}, import("mongoose").DefaultSchemaOptions> & import("@/models/size.model").ISize & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}>;
//# sourceMappingURL=size.service.d.ts.map