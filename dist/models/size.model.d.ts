import mongoose from 'mongoose';
export interface ISize extends mongoose.Document {
    user: mongoose.Types.ObjectId;
    category: mongoose.Types.ObjectId;
    name: string;
    price: number;
    active: boolean;
}
export declare const Size: mongoose.Model<ISize, {}, {}, {}, mongoose.Document<unknown, {}, ISize, {}, mongoose.DefaultSchemaOptions> & ISize & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, any, ISize>;
//# sourceMappingURL=size.model.d.ts.map