import { Table } from "../../models/table.model.js";


export async function createTableService(data: {
  user: string;
  number: string;
  letter?: string;
}) {
  return await Table.create(data);
}
