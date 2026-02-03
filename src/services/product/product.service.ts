import { Product } from "../../models/product.model.js";

export async function createProductService(data: {
    user: string;
    name: string;
    description?: string;
    basePrice: number;
    category:string;
  }) {
    return await Product.create(data);
    
  }

