import mongoose from 'mongoose';
const sizeSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    active: { type: Boolean, default: true }
});
export const Size = mongoose.model("Size", sizeSchema);
//# sourceMappingURL=size.model.js.map