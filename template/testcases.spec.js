// while not necessary, helps with running from the CLI
import { describe, expect, test } from '@jest/globals'
import { result } from "./index";
// pull in the details of the problem
import { problem } from './problem.define';

describe(problem.describe, () => {
  problem.testcases.map(
    ({ caseName, testInput, testExpects }) => {
      test(`/t${caseName}`, () => {
        expect(result(testInput)).toBe(testExpects);
      });
    }
  );
});
