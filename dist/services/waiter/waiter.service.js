import { Waiter } from "@/models/waiter.model";
export async function createWaiterService(data) {
    return await Waiter.create(data);
}
//# sourceMappingURL=waiter.service.js.map