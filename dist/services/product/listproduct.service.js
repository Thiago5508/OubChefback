import { Product } from "@/models/product.model";
export async function listProductService(active, userId) {
    return await Product.find({ active: active, user: userId })
        .sort({ createdAt: -1 });
}
//# sourceMappingURL=listproduct.service.js.map