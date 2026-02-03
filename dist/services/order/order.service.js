import { Order } from "../../models/order.model.js";
export async function createOrderService(data) {
    return await Order.create(data);
}
//# sourceMappingURL=order.service.js.map