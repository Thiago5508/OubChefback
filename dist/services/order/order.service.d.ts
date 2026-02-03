export declare function createOrderService(data: {
    user: string;
    table?: string | null;
    customerName: string;
    total?: number;
    waiter?: string;
    tip?: number;
}): Promise<import("mongoose").Document<unknown, {}, import("@/models/order.model").IOrder, {}, import("mongoose").DefaultSchemaOptions> & import("@/models/order.model").IOrder & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}>;
//# sourceMappingURL=order.service.d.ts.map