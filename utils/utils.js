import fs from "fs";

export function readFileToArray(filePath) {
  const fileContent = fs.readFileSync(filePath, "utf-8");
  return fileContent.split("\n").filter((line) => line.trim() !== "");
}
