import { Product } from "../../models/product.model.js";

export async function detailProductService(ProductId: string, userId: string) {
  const product = await Product.findOne({ _id: ProductId, user: userId })
    .populate("category", "name")
    .select("name description basePrice active category");

  if (!product) {
    throw new Error("PRODUCT_NOT_FOUND");
  }
  return {product};
}
