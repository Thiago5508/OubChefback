import mongoose from 'mongoose';
const tipSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    waiter: { type: mongoose.Schema.Types.ObjectId, ref: "Waiter", required: true },
    value: { type: Number, required: true },
    date: { type: Date, default: Date.now },
    active: { type: Boolean, default: true }
});
export const Tip = mongoose.model('Tip', tipSchema);
//# sourceMappingURL=tip.model.js.map