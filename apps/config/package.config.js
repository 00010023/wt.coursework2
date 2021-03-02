import { promises } from "fs";

export default async () => {
  const file = await promises.readFile("./package.json", {
    encoding: "utf-8",
  });
  return { ...(await JSON.parse(file)) };
};
