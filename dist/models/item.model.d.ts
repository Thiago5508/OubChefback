import mongoose from "mongoose";
export interface IItem extends mongoose.Document {
    user: mongoose.Types.ObjectId;
    order: mongoose.Types.ObjectId;
    price: number;
    quantity: number;
    active: boolean;
    products: mongoose.Types.ObjectId[];
    size: mongoose.Types.ObjectId;
    ingredients?: mongoose.Types.ObjectId[];
}
export declare const Item: mongoose.Model<IItem, {}, {}, {}, mongoose.Document<unknown, {}, IItem, {}, mongoose.DefaultSchemaOptions> & IItem & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, any, IItem>;
//# sourceMappingURL=item.model.d.ts.map