import { Item } from "../../models/item.model.js";
export async function listItemsByOrderService(orderId, userId) {
    return await Item.find({ order: orderId, user: userId })
        .populate("products", "name price")
        .populate("size", "name price")
        .populate("ingredients", "name extraPrice")
        .sort({ createdAt: -1 });
}
//# sourceMappingURL=listbyorder.service.js.map