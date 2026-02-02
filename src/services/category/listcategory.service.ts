import { Category } from "@/models/category.model";


export async function listcategoryService(active: boolean , userId:string) {
  return await Category.find({ active: active, user:userId })
  .sort({ createdAt: -1 });
}