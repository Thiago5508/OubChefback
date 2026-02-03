import mongoose from 'mongoose';
const waiterSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: true, unique: true },
    active: { type: Boolean, default: true
    },
});
export const Waiter = mongoose.model('Waiter', waiterSchema);
//# sourceMappingURL=waiter.model.js.map