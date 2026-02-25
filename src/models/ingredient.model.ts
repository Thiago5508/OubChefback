import mongoose from 'mongoose';

export interface IIngredient extends mongoose.Document {
  user: mongoose.Types.ObjectId;
  name: string;
  extraPrice: number;
  category: mongoose.Types.ObjectId; 
  active: boolean;
  description?: string;
}

const ingredientSchema = new mongoose.Schema<IIngredient>({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
  extraPrice: { type: Number, default: 0 },
  description: { type: String },
  active: {type: Boolean,default: true}
});

export const Ingredient = mongoose.model<IIngredient>("Ingredient", ingredientSchema);