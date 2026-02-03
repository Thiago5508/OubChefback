import { Product } from "../../models/product.model.js";
export async function createProductService(data) {
    return await Product.create(data);
}
//# sourceMappingURL=product.service.js.map