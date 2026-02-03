import { Category } from "@/models/category.model";
export const categoryService = {
    async create(data) {
        return await Category.create(data);
    }
};
//# sourceMappingURL=category.service.js.map