import { Table } from "../../models/table.model.js";
export async function createTableService(data) {
    return await Table.create(data);
}
//# sourceMappingURL=table.service.js.map