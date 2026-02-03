import mongoose from "mongoose";
interface ListOrdersParams {
    userId: string;
    active: boolean;
    startDate?: string | undefined;
    endDate?: string | undefined;
}
export declare function listAllOrderService({ userId, active, startDate, endDate, }: ListOrdersParams): Promise<(mongoose.Document<unknown, {}, import("../../models/order.model.js").IOrder, {}, mongoose.DefaultSchemaOptions> & import("../../models/order.model.js").IOrder & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
})[]>;
export {};
//# sourceMappingURL=listAllorder.service.d.ts.map