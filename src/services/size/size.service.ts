import { Size } from "@/models/size.model";

export async function createSizeService(data: {
  user: string;
  category: string;
  name: string;
  price: number;
}) {
  return await Size.create(data);
}
