import { Ingredient } from "../../models/ingredient.model.js";
export async function listIngredientService(active, userId) {
    return await Ingredient.find({ active: active, user: userId })
        .sort({ createdAt: -1 });
}
//# sourceMappingURL=listingredient.service.js.map