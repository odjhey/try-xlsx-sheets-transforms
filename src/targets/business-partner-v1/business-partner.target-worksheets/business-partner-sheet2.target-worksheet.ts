import {
  convertWorksheetDataGeneric,
  TMakeTargetInput,
  TMakeCoverterType,
} from "../../../libs/worksheet-data-helper";
import { TBPS2_SCHEMA } from "../business-partner.target-schema";
import { TGenerateFromFlatArg1Fields } from "../business-partner.target-workbook";

export const makeWorksheetData = <TMakeCoverterType<TBPS2_SCHEMA>>(
  convertWorksheetDataGeneric
);

export const deriveFromRaw = (
  raw: Record<TGenerateFromFlatArg1Fields, any>[]
): TMakeTargetInput<TBPS2_SCHEMA> => {
  return raw.map((r) => ({
    BP_Number: r["BP Number"],
    Sales: r.SALESCODE,
  }));
};
