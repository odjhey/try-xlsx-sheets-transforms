import {
  convertWorksheetDataGeneric,
  TMakeCoverterType,
  TMakeTargetInput,
} from "../../../libs/worksheet-data-helper";
import { TBPS1_SCHEMA } from "../business-partner.target-schema";
import { TGenerateFromFlatArg1Fields } from "../business-partner.target-workbook";

export const makeWorksheetData = <TMakeCoverterType<TBPS1_SCHEMA>>(
  convertWorksheetDataGeneric
);

export const deriveFromRaw = (
  raw: Record<TGenerateFromFlatArg1Fields, any>[]
): TMakeTargetInput<TBPS1_SCHEMA> => {
  const mapped = raw.map((r) => ({
    BP_Cat: r["BP Categ"],
    BP_Number: r["BP Number"],
  }));

  return [...new Map(mapped.map((item) => [item["BP_Number"], item])).values()];
};
