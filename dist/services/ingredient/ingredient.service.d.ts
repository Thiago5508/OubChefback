export declare function createIngredientService(data: {
    user: string;
    category: string;
    name: string;
    extraPrice?: number;
    description?: string;
}): Promise<import("mongoose").Document<unknown, {}, import("../../models/ingredient.model.js").IIngredient, {}, import("mongoose").DefaultSchemaOptions> & import("../../models/ingredient.model.js").IIngredient & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}>;
//# sourceMappingURL=ingredient.service.d.ts.map