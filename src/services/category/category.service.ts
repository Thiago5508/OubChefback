import { Category } from "../../models/category.model.js";

export const categoryService = {
  async create(data: { user: string; name: string }) {
    return await Category.create(data);
  }
};
