import { Table } from "@/models/table.model";

export async function createTableService(data: {
  user: string;
  number: string;
  letter?: string;
}) {
  return await Table.create(data);
}
