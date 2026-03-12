import { Size } from "@/models/size.model.js";


export async function listSizeService(active: boolean , userId:string) {
  return await Size.find({ active: active, user:userId })
  .sort({ createdAt: -1 });
}