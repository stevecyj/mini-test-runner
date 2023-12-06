// test it
// expect toBe
// test.only
// 提示是否通過/報錯
// beforeAll, beforeEach, afterAll, afterEach
// describe
// 自動執行所有的測試腳本 *.spec.js

const tests = [];
const onlys = [];

// test 收集測試腳本
export function test(desc, callback) {
  tests.push({ desc, callback });
}

test.only = function (desc, callback) {
  onlys.push({ desc, callback });
};

// it 是 test 的別名
export const it = test;

// 先接收一個值，再給一個期望的值
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

// 執行
export function run() {
  const suit = onlys.length > 0 ? onlys : tests;
  for (const test of suit) {
    test.callback();
  }
}
