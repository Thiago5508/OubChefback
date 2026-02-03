import { categoryService } from "@/services/category/category.service";
export async function createCategoryController(req, res) {
    const userId = req.user?._id;
    const { name } = req.body;
    if (!userId || !name?.trim()) {
        return res.status(400).json({ error: "Missing required fields" });
    }
    try {
        const category = await categoryService.create({ user: userId, name: name.trim() });
        return res.status(201).json(category);
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Internal server error" });
    }
}
//# sourceMappingURL=category.controller.js.map