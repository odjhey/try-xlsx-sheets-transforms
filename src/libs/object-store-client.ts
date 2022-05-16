import * as Minio from "minio";
import { CONFIG } from "../config/config";
import { Readable } from "stream";

export const getClient = () => {
  const { objectStore } = CONFIG;

  const client = new Minio.Client({
    endPoint: objectStore.endPoint,
    useSSL: objectStore.useSSL,
    accessKey: objectStore.accessKey,
    secretKey: objectStore.secretKey,
  });

  return client;
};

export const retrieveFileList = async (
  client: Minio.Client,
  { bucket }: { bucket: string }
): Promise<Minio.BucketItem[]> => {
  const files: any[] = await new Promise((resolve, reject) => {
    const items: Minio.BucketItem[] = [];
    client
      .listObjectsV2(bucket, "", true)
      .on("data", (item) => {
        items.push(item);
      })
      .on("end", () => {
        resolve(items);
      })
      .on("error", (err) => reject(err));
  });

  return files;
};

export const createFileWithStream = async (
  client: Minio.Client,
  stream: Readable,
  {
    bucket,
    fileName,
    extension,
  }: { bucket: string; fileName: string; extension: string }
): Promise<Minio.UploadedObjectInfo> => {
  const file = `${fileName}.${extension}`;

  const createdFileInfo = await client.putObject(bucket, file, stream);

  return createdFileInfo;
};
