import mongoose from "mongoose";

export interface ICategory extends mongoose.Document {
  user: mongoose.Types.ObjectId;
  name: string;
  active: boolean;
}

const categorySchema = new mongoose.Schema<ICategory>({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true },
  active: {type: Boolean,default: true}
});

export const Category = mongoose.model("Category", categorySchema);