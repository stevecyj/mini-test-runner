// test it
// expect toBe
// test.only
// 提示是否通過/報錯
// beforeAll, beforeEach, afterAll, afterEach
// describe
// 自動執行所有的測試腳本 *.spec.js

const tests = [];
export function test(desc, callback) {
  tests.push({ desc, callback });
}

export const it = test;

export function expect(received) {
  return {
    toBe(expected) {
      if (received === expected) {
        console.log("pass");
      } else {
        throw new Error(`fail received: ${received} expected: ${expected}`);
      }
    },
  };
}

export function run() {
  for (const test of tests) {
    test.callback();
  }
}
