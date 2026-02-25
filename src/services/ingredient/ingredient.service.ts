import { Ingredient } from "../../models/ingredient.model.js";

export async function createIngredientService (data: {
    user: string;
    category:string;
    name: string;
    extraPrice?: number;
    description?: string;
  }) {
    return await Ingredient.create(data);
  }

