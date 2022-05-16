import XLSX from "xlsx";
import { BPS1_SCHEMA, BPS2_SCHEMA } from "./business-partner.target-schema";
import * as BPTargetWorksheets from "./business-partner.target-worksheets";

export type TGenerateFromFlatArg1Fields =
  | "BP Number"
  | "NAME"
  | "SALESCODE"
  | "BP Categ";

export const generate = (input: Record<TGenerateFromFlatArg1Fields, any>[]) => {
  const workbook = XLSX.utils.book_new();

  const worksheetData = BPTargetWorksheets.WS1.deriveFromRaw(input);
  const sheet1Data = BPTargetWorksheets.WS1.makeWorksheetData(
    BPS1_SCHEMA,
    worksheetData
  );

  const worksheet2SalesData = BPTargetWorksheets.WS2.deriveFromRaw(input);
  const sheet2Data = BPTargetWorksheets.WS2.makeWorksheetData(
    BPS2_SCHEMA,
    worksheet2SalesData
  );

  const worksheet1 = XLSX.utils.aoa_to_sheet(sheet1Data);
  const worksheet2 = XLSX.utils.aoa_to_sheet(sheet2Data);

  XLSX.utils.book_append_sheet(workbook, worksheet1, "some other sheeeet");
  XLSX.utils.book_append_sheet(workbook, worksheet2, "sales data");

  return workbook;
};
