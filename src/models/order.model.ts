import mongoose from "mongoose";

export interface IOrder extends mongoose.Document {
  user: mongoose.Types.ObjectId;
  table: mongoose.Types.ObjectId | null;
  customerName?: string;
  total: number;
  active: boolean;
  waiter:mongoose.Types.ObjectId | null
}

const orderSchema = new mongoose.Schema<IOrder>({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    table: {type: mongoose.Schema.Types.ObjectId,ref: "Table",default: null},
    customerName: { type: String },
    total: {type: Number,default: 0},
    active: {type: Boolean,default: true},
    waiter:{type: mongoose.Schema.Types.ObjectId, ref: "Waiter", required: true},
  },
  { timestamps: true }
);

export const Order = mongoose.model<IOrder>("Order", orderSchema);