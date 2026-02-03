import mongoose from 'mongoose';
export interface IProduct extends mongoose.Document {
    user: mongoose.Types.ObjectId;
    category: mongoose.Types.ObjectId;
    name: string;
    description?: string;
    basePrice?: number;
    active: boolean;
    createdAt: Date;
    updatedAt: Date;
}
export declare const Product: mongoose.Model<IProduct, {}, {}, {}, mongoose.Document<unknown, {}, IProduct, {}, mongoose.DefaultSchemaOptions> & IProduct & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, any, IProduct>;
//# sourceMappingURL=product.model.d.ts.map