import mongoose from 'mongoose';

export interface ITip extends mongoose.Document {
  user: mongoose.Types.ObjectId;
  waiter: mongoose.Types.ObjectId;
  value: number;
  active: boolean;
  date: Date
}

const tipSchema = new mongoose.Schema<ITip>({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  waiter: { type: mongoose.Schema.Types.ObjectId,ref: "Waiter",required: true },
  value: { type: Number, required: true },
  date:{ type:Date , default: Date.now},
  active: {type: Boolean,default: true}
});

export const Tip = mongoose.model<ITip>('Tip', tipSchema);