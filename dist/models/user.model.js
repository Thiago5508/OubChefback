import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    email: { type: String, unique: true },
    phone: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    active: { type: Boolean, default: true },
    responsibility: { type: String, enum: ['gerente', 'chef', 'waiter'], default: 'gerente', required: true, },
});
export const User = mongoose.model('User', userSchema);
//# sourceMappingURL=user.model.js.map