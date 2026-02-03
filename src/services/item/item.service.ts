import mongoose from "mongoose";
import { Item } from "../../models/item.model.js";

export async function createItemService(data: {
  user: string;
  order: string;
  products: string[];
  size: string;
  ingredients?: string[];
  price: number;
  quantity?: number;
}) {
  return await Item.create({
    user: new mongoose.Types.ObjectId(data.user),
    order: new mongoose.Types.ObjectId(data.order),
    products: data.products.map(id => new mongoose.Types.ObjectId(id)),
    size: new mongoose.Types.ObjectId(data.size),
    ingredients: data.ingredients?.map(id => new mongoose.Types.ObjectId(id)) ?? [],
    price: data.price,
    quantity: data.quantity ?? 1,
    active: true,
  });
}
