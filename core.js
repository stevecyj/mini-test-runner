// test it
// expect toBe
// test.only
// 提示是否通過/報錯
// beforeAll, beforeEach, afterAll, afterEach
// describe
// 自動執行所有的測試腳本 *.spec.js

const tests = [];
const onlys = [];
const beforeAlls = [];
const beforeEachs = [];
const afterAlls = [];
const afterEachs = [];

// test 收集測試腳本
export function test(desc, callback) {
  tests.push({ desc, callback });
}

test.only = function (desc, callback) {
  onlys.push({ desc, callback });
};

// it 是 test 的別名
export const it = test;

// beforeAll 收集測試腳本
export function beforeAll(callback) {
  beforeAlls.push(callback);
}

// beforeEach 收集測試腳本
export function beforeEach(callback) {
  beforeEachs.push(callback);
}

// afterAll 收集測試腳本
export function afterAll(callback) {
  afterAlls.push(callback);
}

// afterEach 收集測試腳本
export function afterEach(callback) {
  afterEachs.push(callback);
}

// 先接收一個值，再給一個期望的值
export function expect(received) {
  return {
    toBe(expected) {
      if (received === expected) {
      } else {
        throw new Error(`fail received: ${received} expected: ${expected}`);
      }
    },
  };
}

export function describe(desc, callback) {
  callback();
}

// 執行
export function run() {
  // 執行 beforeAll
  for (const callback of beforeAlls) {
    callback();
  }

  // test.only
  const suit = onlys.length > 0 ? onlys : tests;
  for (const test of suit) {
    // 執行 beforeEach
    for (const callback of beforeEachs) {
      callback();
    }

    try {
      test.callback();
      console.log(`ok: ${test.desc} success`);
    } catch (error) {
      console.log(`fail: ${test.desc} failed`);
    }

    // 執行 afterEach
    for (const callback of afterEachs) {
      callback();
    }
  }

  // 執行 afterAll
  for (const callback of afterAlls) {
    callback();
  }
}
