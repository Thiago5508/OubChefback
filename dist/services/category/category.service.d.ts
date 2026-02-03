export declare const categoryService: {
    create(data: {
        user: string;
        name: string;
    }): Promise<import("mongoose").Document<unknown, {}, import("../../models/category.model.js").ICategory, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<import("../../models/category.model.js").ICategory & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
};
//# sourceMappingURL=category.service.d.ts.map