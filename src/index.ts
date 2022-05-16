import "dotenv/config";
import XLSX from "xlsx";
import * as ObjStoreClient from "./libs/object-store-client";

import * as BusinessPartnerTarget from "./targets/business-partner-v1/business-partner.target-workbook";

async function main() {
  const workbook = BusinessPartnerTarget.generate([
    {
      "BP Number": "1231231",
      "BP Categ": "ORG",
      NAME: "asdf",
      SALESCODE: "123",
    },
    {
      "BP Number": "1231231",
      "BP Categ": "ORG",
      NAME: "asdf",
      SALESCODE: "333",
    },
  ]);

  const whatami = XLSX.write(workbook, { type: "buffer" });

  const client = ObjStoreClient.getClient();

  const createdXlsxInfo = await ObjStoreClient.createFileWithStream(
    client,
    whatami,
    { bucket: "transforms", fileName: "some-file-odz", extension: "xlsx" }
  );

  console.log("info", createdXlsxInfo);
}

async function main2() {
  const workbook = BusinessPartnerTarget.generate([
    {
      "BP Number": "1231231",
      "BP Categ": "ORG",
      NAME: "asdf",
      SALESCODE: "123",
    },
    {
      "BP Number": "1231231",
      "BP Categ": "ORG",
      NAME: "asdf",
      SALESCODE: "333",
    },
  ]);

  const whatami = XLSX.writeFile(workbook, "tmp/target4.xlsx", {
    type: "buffer",
  });

  console.log("info", whatami);
}

// main2();
main();
