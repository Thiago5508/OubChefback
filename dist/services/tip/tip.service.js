import { Tip } from "@/models/tip.model";
export async function createTipService(data) {
    return await Tip.create(data);
}
//# sourceMappingURL=tip.service.js.map