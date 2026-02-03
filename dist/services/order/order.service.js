import { Order } from "@/models/order.model";
export async function createOrderService(data) {
    return await Order.create(data);
}
//# sourceMappingURL=order.service.js.map