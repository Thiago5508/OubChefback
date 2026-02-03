import { listProductService } from "@/services/product/listproduct.service";
export async function listProductController(req, res) {
    const user = req.user?._id;
    const active = true;
    if (!user) {
        return res.status(401).json({ error: "Unauthorized" });
    }
    try {
        const items = await listProductService(active, user);
        return res.status(200).json(items);
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Internal server error" });
    }
}
//# sourceMappingURL=listproduct.controller.js.map