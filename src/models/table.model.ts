import mongoose from 'mongoose';

export interface ITable extends mongoose.Document {
user: mongoose.Types.ObjectId;
  number: string;
  letter: string;
  active: boolean;
}

const tableSchema = new mongoose.Schema<ITable>({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  number: { type: String, required: true },
  letter: { type: String, default: 'A' },
  active: {type: Boolean,default: true}
});

tableSchema.index({ number: 1, letter: 1 }, { unique: true });

export const Table = mongoose.model<ITable>('Table', tableSchema);