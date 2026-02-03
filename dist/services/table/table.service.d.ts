export declare function createTableService(data: {
    user: string;
    number: string;
    letter?: string;
}): Promise<import("mongoose").Document<unknown, {}, import("../../models/table.model.js").ITable, {}, import("mongoose").DefaultSchemaOptions> & import("../../models/table.model.js").ITable & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}>;
//# sourceMappingURL=table.service.d.ts.map