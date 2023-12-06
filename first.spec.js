import { beforeAll, beforeEach, test, it, run, expect } from "./index.js";

beforeAll(() => {
  console.log("beforeAll");
});

beforeEach(() => {
  console.log("beforeEach");
});

test("first test case", () => {
  console.log("first test case");
  expect(2).toBe(2);
});

it("second test case", () => {
  console.log("second test case");
});

// test.only("only test case", () => {
//   console.log("only test case");
// });

run();
