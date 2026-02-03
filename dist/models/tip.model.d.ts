import mongoose from 'mongoose';
export interface ITip extends mongoose.Document {
    user: mongoose.Types.ObjectId;
    waiter: mongoose.Types.ObjectId;
    value: number;
    active: boolean;
    date: Date;
}
export declare const Tip: mongoose.Model<ITip, {}, {}, {}, mongoose.Document<unknown, {}, ITip, {}, mongoose.DefaultSchemaOptions> & ITip & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, any, ITip>;
//# sourceMappingURL=tip.model.d.ts.map