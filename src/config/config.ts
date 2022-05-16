const convert10ToBoolean = (input: string): boolean =>
  input === "1" ? true : false;

export const CONFIG = {
  objectStore: {
    endPoint: process.env.OBJ_STORE_ENDPOINT || "localhost",
    port: process.env.OBJ_STORE_PORT
      ? parseInt(process.env.OBJ_STORE_PORT)
      : undefined,
    useSSL: convert10ToBoolean(process.env.OBJ_STORE_USESSL || "0"),
    accessKey: process.env.OBJ_STORE_ACCESSKEY || "",
    secretKey: process.env.OBJ_STORE_SECRETKEY || "",
  },
} as const;
