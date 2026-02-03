export declare function createProductService(data: {
    user: string;
    name: string;
    description?: string;
    basePrice: number;
    category: string;
}): Promise<import("mongoose").Document<unknown, {}, import("@/models/product.model").IProduct, {}, import("mongoose").DefaultSchemaOptions> & import("@/models/product.model").IProduct & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}>;
//# sourceMappingURL=product.service.d.ts.map