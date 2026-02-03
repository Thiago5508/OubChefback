import { Order } from "../../models/order.model.js";
import mongoose from "mongoose";
export async function listAllOrderService({ userId, active, startDate, endDate, }) {
    const filter = {
        user: new mongoose.Types.ObjectId(userId),
    };
    if (active !== undefined) {
        filter.active = active;
    }
    if (startDate && endDate) {
        filter.createdAt = {
            $gte: new Date(startDate),
            $lte: new Date(endDate),
        };
    }
    return await Order
        .find(filter)
        .populate("table", "number letter")
        .populate("waiter", "name")
        .sort({ createdAt: -1 });
}
//# sourceMappingURL=listAllorder.service.js.map