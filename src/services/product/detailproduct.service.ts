import { Ingredient } from "../../models/ingredient.model.js";
import { Size } from "../../models/size.model.js";

export async function detailProductService(ProductId: string , userId:string) {
    const [ingredients, sizes] = await Promise.all([
    Ingredient.find(
      { product: ProductId, user: userId },
      { _id: 1, name: 1 }
    ).sort({ createdAt: -1 }),

    Size.find(
      { product: ProductId, user: userId },
      { _id: 1, name: 1 }
    ).sort({ createdAt: -1 })
  ]);
  return {
    ingredients,
    sizes
  }
}
