import { Order } from "@/models/order.model";

export async function createOrderService(data: {
  user: string;
  table?: string | null;
  customerName: string;
  total?:number;
  waiter?:string;
  tip?:number;
}) {
  return await Order.create(data);
}
