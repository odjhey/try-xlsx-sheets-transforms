import { lookup, TBaseSchema, TLookupMap } from "../../libs/target-utils";

const BP_LOOKUP: TLookupMap = [
  { k: "ORG", value: "1" },
  { k: "PERS", value: "2" },
];

export type TSHEET1_SCHEMA = TBaseSchema<"fieldB" | "bpCat">;
export const SHEET1_SCHEMA: TSHEET1_SCHEMA = {
  fieldB: { label: "field 1" },
  bpCat: {
    label: "BP Category",
    formatter: (v) => lookup(v, BP_LOOKUP, "0"),
  },
};

export type TANOTHER_SHEET_SCHEMA = TBaseSchema<"fieldX" | "ano">;
export const ANOTHER_SHEET_SCHEMA: TANOTHER_SHEET_SCHEMA = {
  fieldX: { label: "field X" },
  ano: {
    label: "BP Category",
    formatter: (v) => lookup(v, BP_LOOKUP, "0"),
  },
};

export type TBPS1_SCHEMA = TBaseSchema<"BP_Number" | "BP_Cat">;
export const BPS1_SCHEMA: TBPS1_SCHEMA = {
  BP_Number: { label: "BP_Number" },
  BP_Cat: {
    label: "BP_Cat",
    formatter: (v) => lookup(v, BP_LOOKUP, "0"),
  },
};

export type TBPS2_SCHEMA = TBaseSchema<"BP_Number" | "Sales">;
export const BPS2_SCHEMA: TBPS2_SCHEMA = {
  BP_Number: { label: "BP_Number" },
  Sales: { label: "Sales " },
};
