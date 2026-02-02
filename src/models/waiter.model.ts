import mongoose from 'mongoose';

export interface IWaiter extends mongoose.Document {
  name: string;
  active: boolean;
  user: mongoose.Types.ObjectId;
}

const waiterSchema = new mongoose.Schema<IWaiter>({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true ,unique: true },
  active: { type: Boolean, default: true
  },
});

export const Waiter = mongoose.model<IWaiter>('Waiter', waiterSchema);