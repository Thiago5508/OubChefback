import { Waiter } from "@/models/waiter.model";

export async function createWaiterService(data: {
  user: string;
  name: string;
}) {
  return await Waiter.create(data);
}
