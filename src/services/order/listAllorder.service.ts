import { Order } from "../../models/order.model.js";
import mongoose from "mongoose";

interface ListOrdersParams {
  userId: string;
  active: boolean;
  startDate?: string | undefined;
  endDate?: string | undefined;
}

export async function listAllOrderService({
  userId,
  active,
  startDate,
  endDate,
}: ListOrdersParams) {

  const filter: any = {
    user: new mongoose.Types.ObjectId(userId),
  };
  if (active !== undefined) {
    filter.active = active;
  }

  if (startDate && endDate) {
    filter.createdAt = {
      $gte: new Date(startDate),
      $lte: new Date(endDate),
    };
  }

  return await Order
    .find(filter)
    .populate("table","number letter")
    .populate("waiter","name")
    .sort({ createdAt: -1 });
}
