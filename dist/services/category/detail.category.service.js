import { Product } from "../../models/product.model.js";
export async function detailCategoryService(CategoryId, userId) {
    return await Product.find({ category: CategoryId, user: userId }, { _id: 1, name: 1 })
        .sort({ createdAt: -1 });
}
//# sourceMappingURL=detail.category.service.js.map