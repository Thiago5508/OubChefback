import { Ingredient } from "@/models/ingredient.model";
export async function createIngredientService(data) {
    return await Ingredient.create(data);
}
//# sourceMappingURL=ingredient.service.js.map