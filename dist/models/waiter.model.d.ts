import mongoose from 'mongoose';
export interface IWaiter extends mongoose.Document {
    name: string;
    active: boolean;
    user: mongoose.Types.ObjectId;
}
export declare const Waiter: mongoose.Model<IWaiter, {}, {}, {}, mongoose.Document<unknown, {}, IWaiter, {}, mongoose.DefaultSchemaOptions> & IWaiter & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, any, IWaiter>;
//# sourceMappingURL=waiter.model.d.ts.map