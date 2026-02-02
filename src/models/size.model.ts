import mongoose from 'mongoose';

export interface ISize extends mongoose.Document {
  user: mongoose.Types.ObjectId;
  category: mongoose.Types.ObjectId;
  name: string;
  price: number;
  active: boolean;
}

const sizeSchema = new mongoose.Schema<ISize>({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  active: {type: Boolean,default: true}
});

export const Size = mongoose.model<ISize>("Size", sizeSchema);