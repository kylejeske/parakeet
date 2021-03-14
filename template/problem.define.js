export function testProblem(caseName, testInput, testExpects) {
  this.caseName     = caseName    ?? "Test Problem";
  this.testInput    = testInput   ?? true;
  this.testExpects  = testExpects ?? true;
}

const buildCases = (testcases) => testcases.map(
  ({ caseName, testInput, testExpects }) => `
    test('${testInput} expects ${testExpects}', () => {
      expect(result(${testInput})).toBe(${testExpects});
    })
  `,
  []
);

export const problem = {
  'name': 'example',
  'overview': 'Example Problem',
  'testcases': [
    new testProblem("Test if `true` === `true`", true, true)
  ],
  template: "",
  solverTemplate: ""
};

export const indexFileTemplate =
`export const result = (input) => {
  return (input == true);
};
`;

export const testFileTemplate =
`import {describe, expect, test} from '@jest/globals'
  import { result } from "./index";

  describe('${problem.overview}', () => {
    ${buildCases(problem.testcases)}
  });
`;

problem.template        = testFileTemplate;
problem.solverTemplate  = indexFileTemplate;

export default problem;
