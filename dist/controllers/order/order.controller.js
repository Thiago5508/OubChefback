import { createOrderService } from "../../services/order/order.service.js";
export async function createOrderController(req, res) {
    const userId = req.user?._id;
    const { table, customerName, total, waiter, tip } = req.body;
    if (!userId) {
        return res.status(400).json({ error: "Missing user ID" });
    }
    try {
        const order = await createOrderService({
            user: userId,
            table,
            customerName,
            total,
            waiter,
            tip
        });
        return res.status(201).json({ message: 'Ordem criada com sucesso', order });
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Internal server error" });
    }
}
//# sourceMappingURL=order.controller.js.map