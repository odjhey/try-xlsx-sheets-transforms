import { TBaseSchema } from "./target-utils";

export type TMakeTargetInput<T> = Record<keyof T, any>[];

export type TMakeCoverterType<T> = (
  schema: T,
  input: TMakeTargetInput<T>
) => string[][];

export const convertWorksheetDataGeneric = <T extends TBaseSchema<string>>(
  schema: T,
  input: TMakeTargetInput<T>
): string[][] => {
  const schemaKeys = Object.keys(schema);

  const contents = input.map((row) => {
    return schemaKeys.map((k) => {
      const formatter = schema[k].formatter;
      if (formatter && typeof formatter === "function") {
        return formatter(row[k]);
      }
      return row[k];
    });
  });

  const headerRow = schemaKeys.map((k) => schema[k].label);

  return [headerRow, ...contents];
};
