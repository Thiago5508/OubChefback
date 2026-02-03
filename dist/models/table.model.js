import mongoose from 'mongoose';
const tableSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    number: { type: String, required: true },
    letter: { type: String, default: 'A' },
    active: { type: Boolean, default: true }
});
tableSchema.index({ number: 1, letter: 1 }, { unique: true });
export const Table = mongoose.model('Table', tableSchema);
//# sourceMappingURL=table.model.js.map