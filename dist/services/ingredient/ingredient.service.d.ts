export declare function createIngredientService(data: {
    user: string;
    category: string;
    name: string;
    extraPrice?: number;
}): Promise<import("mongoose").Document<unknown, {}, import("@/models/ingredient.model").IIngredient, {}, import("mongoose").DefaultSchemaOptions> & import("@/models/ingredient.model").IIngredient & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}>;
//# sourceMappingURL=ingredient.service.d.ts.map