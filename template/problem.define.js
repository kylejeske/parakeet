export function testProblem(caseName, testInput, testExpects) {
  this.caseName     = caseName    ?? "Test Problem";
  this.testInput    = testInput   ?? true;
  this.testExpects  = testExpects ?? true;
}

export const problem = {
  'name': 'example',
  'overview': 'Example Problem',
  'testcases': [
    new testProblem("Test if `true` === `true`", true, true)
  ]
};

export default problem;
