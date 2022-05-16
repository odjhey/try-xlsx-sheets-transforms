export type TLookupMap = { k: string; value: string }[];

export type TBaseSchema<T extends string> = Record<
  T,
  {
    label: string;
    formatter?: (cellValue: any) => string;
  }
>;

export const lookup = (
  value: string,
  map: TLookupMap,
  defaultValue?: string
) => {
  const f = map.find((m) => m.k === value);
  if (f) {
    return f.value;
  }
  if (defaultValue) {
    return defaultValue;
  }

  return value;
};
