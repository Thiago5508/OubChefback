import { Item } from "@/models/item.model";

export async function listItemsByOrderService(orderId: string , userId:string) {
  return await Item.find({ order: orderId, user:userId })
  .populate("products","name price")
  .populate("size", "name price")
  .populate("ingredients", "name extraPrice")
  .sort({ createdAt: -1 });
}
