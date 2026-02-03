import mongoose from 'mongoose';
const productSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
    name: { type: String, required: true },
    description: { type: String },
    basePrice: { type: Number },
    active: { type: Boolean, default: true }
}, { timestamps: true });
export const Product = mongoose.model("Product", productSchema);
//# sourceMappingURL=product.model.js.map