import { Size } from "../../models/size.model.js";
export async function listSizeService(active, userId) {
    return await Size.find({ active: active, user: userId })
        .sort({ createdAt: -1 });
}
//# sourceMappingURL=listsize.service.js.map