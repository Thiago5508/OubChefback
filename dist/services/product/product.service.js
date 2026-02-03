import { Product } from "@/models/product.model";
export async function createProductService(data) {
    return await Product.create(data);
}
//# sourceMappingURL=product.service.js.map