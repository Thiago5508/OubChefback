import mongoose from "mongoose";
const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    table: { type: mongoose.Schema.Types.ObjectId, ref: "Table", default: null },
    customerName: { type: String },
    total: { type: Number, default: 0 },
    active: { type: Boolean, default: true },
    waiter: { type: mongoose.Schema.Types.ObjectId, ref: "Waiter", required: true },
}, { timestamps: true });
export const Order = mongoose.model("Order", orderSchema);
//# sourceMappingURL=order.model.js.map