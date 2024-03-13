import { RowID, RowElement } from "./interface";

declare module "crud.js" {
  export function insertRow(row: RowElement): RowID;
  export function deleteRow(rowId: ROWID): void;
  export function updateRow(rowID: RowID, row: RowElement): RowID;
}
