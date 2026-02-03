import mongoose from 'mongoose';
const ingredientSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
    extraPrice: { type: Number, default: 0 },
    active: { type: Boolean, default: true }
});
export const Ingredient = mongoose.model("Ingredient", ingredientSchema);
//# sourceMappingURL=ingredient.model.js.map