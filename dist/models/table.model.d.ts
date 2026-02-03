import mongoose from 'mongoose';
export interface ITable extends mongoose.Document {
    user: mongoose.Types.ObjectId;
    number: string;
    letter: string;
    active: boolean;
}
export declare const Table: mongoose.Model<ITable, {}, {}, {}, mongoose.Document<unknown, {}, ITable, {}, mongoose.DefaultSchemaOptions> & ITable & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, any, ITable>;
//# sourceMappingURL=table.model.d.ts.map