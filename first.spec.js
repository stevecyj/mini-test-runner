import { test, it, run, expect } from "./index.js";

test("first test case", () => {
  console.log("first test case");
  expect(2).toBe(2);
});

it("second test case", () => {
  console.log("second test case");
});

run();
