import mongoose from 'mongoose';

export interface IProduct extends mongoose.Document {
  user: mongoose.Types.ObjectId;
  category: mongoose.Types.ObjectId;
  name: string;
  description?: string;
  basePrice?: number;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const productSchema = new mongoose.Schema<IProduct>({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
    name: { type: String, required: true },
    description: { type: String },
    basePrice: { type: Number},
    active: { type: Boolean, default: true }
  },
  { timestamps: true }
);

export const Product = mongoose.model<IProduct>("Product", productSchema);