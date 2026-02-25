import { createIngredientService } from "../../services/ingredient/ingredient.service.js";
export async function createIngredientController(req, res) {
    try {
        const userId = req.user?._id;
        const { category, name, extraPrice, description } = req.body;
        if (!userId || !category || !name) {
            return res.status(400).json({ error: "Missing required fields" });
        }
        const ingredient = await createIngredientService({
            user: userId,
            category,
            name,
            extraPrice,
            description,
        });
        return res.status(201).json({ message: 'Ingrediente criado com sucesso', ingredient });
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Internal server error" });
    }
}
//# sourceMappingURL=ingredient.controller.js.map