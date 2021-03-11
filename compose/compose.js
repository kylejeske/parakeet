#!/usr/bin/env node

import mkdirPkg from 'mkdirp';
const mkdir = mkdirPkg;

import { problem } from '../template/problem.define.js';
import { problemPackage } from '../template/package.define.js';

const { overview, testcases } = problem;

console.log('Composing...');

const newDir = await mkdir(`./tests/${overview.name}`);

console.log(`
- Make Directory: ${newDir}
- Test Problem: ${overview}
- Cases:`);
console.table(
  testcases,
  ['caseName', 'testInput', 'testExpects']
);

console.log(`
- Bulding Package: (package.json)
${JSON.stringify(problemPackage, null, 2)}
`);
