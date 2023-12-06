// 1. 獲取所有的測試腳本 *.spec.js
// 2. 執行這些測試腳本

import { glob } from "glob";
import { build } from "esbuild";
import fs from "fs/promises";

const files = glob.sync("*.spec.js");
for (const file of files) {
  const fileContent = await fs.readFile(file, "utf-8");
  await runModule(fileContent);
}
async function runModule(fileContent) {
  const result = await build({
    stdin: {
      contents: fileContent,
      resolveDir: process.cwd(),
    },
    bundle: true,
    write: false,
    target: "esnext",
  });

  // console.log(result.outputFiles[0].text);
  new Function(result.outputFiles[0].text)();
}
