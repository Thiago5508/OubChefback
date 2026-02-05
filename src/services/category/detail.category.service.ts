import { Category } from "../../models/category.model.js";
export async function DetailCategoryService(CategoryId: string , userId:string) {
  return await Category.find({ Category: CategoryId, user:userId })
  .populate("products")
  .populate("size")
  .populate("ingredients", "name extraPrice")
  .sort({ createdAt: -1 });
}
