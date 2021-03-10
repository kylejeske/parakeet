import {describe, expect, test} from '@jest/globals'
import { result } from "./index";

describe('Find the missing number in the array (sequence)', () => {
  test('Expect [3,7,1,2,8,4,5] to return 6', () => {
    expect(result([3,7,1,2,8,4,5])).toBe(6);
  });
  test('Expect [1,4,7,13] to return 10', () => {
    expect(result([1,4,7,13])).toBe(10);
  })
});
