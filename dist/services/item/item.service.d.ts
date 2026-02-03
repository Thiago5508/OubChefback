import mongoose from "mongoose";
export declare function createItemService(data: {
    user: string;
    order: string;
    products: string[];
    size: string;
    ingredients?: string[];
    price: number;
    quantity?: number;
}): Promise<mongoose.Document<unknown, {}, import("../../models/item.model.js").IItem, {}, mongoose.DefaultSchemaOptions> & import("../../models/item.model.js").IItem & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}>;
//# sourceMappingURL=item.service.d.ts.map