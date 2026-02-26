import { Ingredient } from "../../models/ingredient.model.js"; 


export async function listIngredientService(active: boolean , userId:string) {
  return await Ingredient.find({ active: active, user:userId })
  .sort({ createdAt: -1 });
}