import { detailProductService } from "../../services/product/detailproduct.service.js";
export async function detailProductController(req, res) {
    const user = req.user?._id;
    if (!user) {
        return res.status(401).json({ error: "Unauthorized" });
    }
    const { ProductId } = req.params;
    if (!ProductId) {
        return res.status(400).json({ error: "Missing orderId param!" });
    }
    try {
        const items = await detailProductService(ProductId, user);
        return res.status(200).json(items);
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Internal server error!" });
    }
}
//# sourceMappingURL=detail.product.controller.js.map