import mongoose from "mongoose";
const categorySchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: true },
    active: { type: Boolean, default: true }
});
export const Category = mongoose.model("Category", categorySchema);
//# sourceMappingURL=category.model.js.map