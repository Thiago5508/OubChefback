import { listSizeService } from "../../services/size/listsize.service";
export async function listSizeController(req, res) {
    const user = req.user?._id;
    const active = true;
    if (!user) {
        return res.status(401).json({ error: "Unauthorized" });
    }
    try {
        const items = await listSizeService(active, user);
        return res.status(200).json(items);
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Internal server error" });
    }
}
//# sourceMappingURL=listsize.controller.js.map