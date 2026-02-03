import { createTableService } from "../../services/table/table.service.js";
export async function createTableController(req, res) {
    const userId = req.user?._id;
    const { number, letter } = req.body;
    if (!userId || !number) {
        return res.status(400).json({ error: "Missing required fields" });
    }
    try {
        const table = await createTableService({
            user: userId,
            number,
            letter, // opcional
        });
        return res.status(201).json({ message: 'Mesa criada com sucesso', table });
    }
    catch (err) {
        console.error(err);
        // erro de índice único (number + letter)
        if (err.code === 11000) {
            return res.status(400).json({
                error: "A table with this number and letter already exists",
            });
        }
        return res.status(500).json({ error: "Internal server error" });
    }
}
//# sourceMappingURL=table.controller.js.map