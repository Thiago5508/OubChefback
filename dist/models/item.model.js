import mongoose from "mongoose";
const itemSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, },
    order: { type: mongoose.Schema.Types.ObjectId, ref: "Order", required: true, },
    price: { type: Number, required: true, },
    quantity: { type: Number, default: 1, },
    active: { type: Boolean, default: true, },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true }],
    ingredients: [{ type: mongoose.Schema.Types.ObjectId, ref: "Ingredient" }],
    size: { type: mongoose.Schema.Types.ObjectId, ref: "Size", required: true }
}, { timestamps: true });
export const Item = mongoose.model("Item", itemSchema);
//# sourceMappingURL=item.model.js.map