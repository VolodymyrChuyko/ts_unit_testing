import { fetchUser, subtract, sum } from "./index";

void test('Should return 8 if sum() input is (3, 5)', () => {
    const actual = sum(3, 5);
    const expected = 8;

    expect(actual)
      .toBe(expected);
  }
);

void test('Should be greater than 5 if sum() input is (2, 4)', () => {
  const actual = sum(2, 4);
  const expected = 5;

  expect(actual)
    .toBeGreaterThan(expected);
}
);

void test('Should return -2 if subtract() input is (3, 5)', () => {
    const actual = subtract(3, 5);
    const expected = -2;

    expect(actual)
      .toBe(expected);
  }
);

void test('Should load user', async () => {
    const user = await fetchUser();
    const actual = user.name;
    const expected = 'Jhon Doe';

    expect(actual)
      .toBe(expected);
  }
);

function expect(actual: number | string | object) {
  return {
    toBe(expected: number | string | object) {
      if (actual !== expected) {
        throw new Error (`Expected to be ${expected.toString()}, but got ${actual.toString()}`);
      }
    },

    toBeGreaterThan(expected: number | string | object) {
      if (actual <= expected) {
        throw new Error(`Expected to be greater then ${expected.toString()}, but got ${actual.toString()}`);
      }
    }
  };
}

async function test(title: string, callback: () => void | Promise<unknown>) {
  try {
    await callback();
    console.log('✅', title);
  } catch (error) {
    console.log('❌', title);
    console.error(error);
  }
}
