import { Category } from "@/models/category.model";
export async function listcategoryService(active, userId) {
    return await Category.find({ active: active, user: userId })
        .sort({ createdAt: -1 });
}
//# sourceMappingURL=listcategory.service.js.map