export declare function createWaiterService(data: {
    user: string;
    name: string;
}): Promise<import("mongoose").Document<unknown, {}, import("@/models/waiter.model").IWaiter, {}, import("mongoose").DefaultSchemaOptions> & import("@/models/waiter.model").IWaiter & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}>;
//# sourceMappingURL=waiter.service.d.ts.map