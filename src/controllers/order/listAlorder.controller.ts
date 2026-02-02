import type { Request, Response } from "express";
import { listAllOrderService } from "@/services/order/listAllorder.service";

export async function listAllorderController(req: Request, res: Response) {
  const userId = req.user?._id;
  const { active, startDate, endDate } = req.query;

  if (!userId) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  if (active === undefined) {
    return res.status(400).json({ error: "Ativação nao definida" });
  }
  

  try {
    const items = await listAllOrderService({
    userId:userId as string,
    active: active === "true",
    startDate:startDate as string | undefined,
    endDate: endDate as string | undefined,
  });

    return res.status(200).json(items);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
