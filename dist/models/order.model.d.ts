import mongoose from "mongoose";
export interface IOrder extends mongoose.Document {
    user: mongoose.Types.ObjectId;
    table: mongoose.Types.ObjectId | null;
    customerName?: string;
    total: number;
    active: boolean;
    waiter: mongoose.Types.ObjectId | null;
}
export declare const Order: mongoose.Model<IOrder, {}, {}, {}, mongoose.Document<unknown, {}, IOrder, {}, mongoose.DefaultSchemaOptions> & IOrder & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, any, IOrder>;
//# sourceMappingURL=order.model.d.ts.map