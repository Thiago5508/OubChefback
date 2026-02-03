import { Product } from "@/models/product.model";


export async function listProductService(active: boolean , userId:string) {
  return await Product.find({ active: active, user:userId })
  .sort({ createdAt: -1 });
}