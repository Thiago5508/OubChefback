import mongoose from 'mongoose';
export interface IIngredient extends mongoose.Document {
    user: mongoose.Types.ObjectId;
    name: string;
    extraPrice: number;
    category: mongoose.Types.ObjectId;
    active: boolean;
}
export declare const Ingredient: mongoose.Model<IIngredient, {}, {}, {}, mongoose.Document<unknown, {}, IIngredient, {}, mongoose.DefaultSchemaOptions> & IIngredient & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, any, IIngredient>;
//# sourceMappingURL=ingredient.model.d.ts.map