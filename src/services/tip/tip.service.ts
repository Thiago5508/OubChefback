import { Tip } from "@/models/tip.model";

export async function createTipService(data: {
  user: string;
  waiter: string;
  value: number;
}) {
  return await Tip.create(data);
}
