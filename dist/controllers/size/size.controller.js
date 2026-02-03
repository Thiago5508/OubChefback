import { createSizeService } from "@/services/size/size.service";
export async function createSizeController(req, res) {
    const userId = req.user?._id;
    const { category, name, price } = req.body;
    if (!userId || !category || !name || !price) {
        return res.status(400).json({ error: "Missing required fields" });
    }
    try {
        const size = await createSizeService({
            user: userId,
            category,
            name,
            price
        });
        return res.status(201).json({ message: 'Tamanho criado com sucesso', size });
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Internal server error" });
    }
}
//# sourceMappingURL=size.controller.js.map