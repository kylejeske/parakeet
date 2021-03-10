import {describe, expect, test} from '@jest/globals'
import { result } from "./index";

describe('Median of Two Sorted Arrays', () => {
  test('[1,3] & [2] should equal 2.00', () => {
    expect(result([1,3], [2])).toBe(2.00);
  });
  test('[1,2] & [3,4] should equal 2.50', () => {
    expect(result([1,2], [3,4])).toBe(2.50);
  });
  test('[1,3] & [2,7] should equal 2.50', () => {
    expect(result([1,3], [2,7])).toBe(2.50);
  });
  // test('[0,0] & [0,0] should equal "empty"', () => {
  //   expect(true).toBe(true);
  // })
});
