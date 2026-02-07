export declare function detailProductService(ProductId: string, userId: string): Promise<{
    product: import("mongoose").Document<unknown, {}, import("../../models/product.model.js").IProduct, {}, import("mongoose").DefaultSchemaOptions> & import("../../models/product.model.js").IProduct & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    };
}>;
//# sourceMappingURL=detailproduct.service.d.ts.map