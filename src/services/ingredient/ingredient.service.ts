import { Ingredient } from "@/models/ingredient.model";

export async function createIngredientService (data: {
    user: string;
    category:string;
    name: string;
    extraPrice?: number;
  }) {
    return await Ingredient.create(data);
  }

