import {
  beforeAll,
  beforeEach,
  afterAll,
  afterEach,
  test,
  it,
  run,
  expect,
  describe,
} from "./index.js";

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

afterEach(() => {
  console.log("afterEach");
});

describe("sub", () => {
  test("sub first test case", () => {
    console.log("sub first test case");
    expect(2).toBe(2);
  });
});

afterAll(() => {
  console.log("afterAll");
});
// test.only("only test case", () => {
//   console.log("only test case");
// });

run();
