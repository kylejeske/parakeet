#!/usr/bin/env node

import { spawn } from "node:child_process";

import writeJsonFile from 'write-json-file';

import writeAtomicFile from 'write-file-atomic';
const mkfile = writeAtomicFile;

import mkdirPkg from 'mkdirp';
const mkdir = mkdirPkg;

import { problem } from '../template/problem.define.js';
import { problemPackage } from '../template/package.define.js';

const { name, overview, testcases, template, solverTemplate } = problem;
const packageJson = problemPackage(name);

const runTestCommand = async (runningDir) => {
  try {
    const child = spawn("yarn", ["test"], { cwd: runningDir });
    child.on('exit', code => console.log(`Exited with code: ${code}.`));
    child.on('message', data => console.log(data));
    process.stdin.pipe(child.stdout);
    for await (const data of child.stdout) {
      console.log(`${data}`);
    }
  } catch (e) {
    console.error(`Error Occurred: ${e.message}`);
  }
}

try {

  console.log(`Composing...

  New Scaffolding:
    + Directory: ${name}
  `);
  const newDir = await mkdir(`./tests/${name}`);

  if (newDir === undefined) {
    throw new Error(`Directory (${name}) already exists.`);
  }
  // Generate: Directory Scaffold
  console.log(`+ Created Directory:
    ${newDir}`);
  // Generate: Problem Files
  console.log(`+ Generate Problem:
  - Test Problem: ${overview}
  - Cases:`);
  // Generate: Test Cases
  console.table(
    testcases,
    ['caseName', 'testInput', 'testExpects']
  );

  // Build our package Runner
  await (async () => {
    console.log(`+ Bulding Package: (package.json)`);
    await writeJsonFile(`${newDir}/package.json`, packageJson);
  })();

  // Build our Test Cases & Index File
  await (async () => {
    console.log(`+ Bulding Test Cases: (testcases.spec.js)`);
    await mkfile(`${newDir}/testcases.spec.js`, template);

    console.log(`+ Bulding Index File: (index.js)`);
    await mkfile(`${newDir}/index.js`, solverTemplate);
  })();

  console.log(`
  Finished Creating Package: ${name}.

  Running init pass:
  (this may take a minute...)
  `);

  await (async() => runTestCommand(newDir))();

  console.log(`
  😁😁😁😁😁😁😁😁😁😁

  How to Run:
    + 'cd ${newDir}
    + 'yarn test'

  Run with hot-reload:
    * can we useful when updating the file you're testing against
    + 'cd ${newDir}
    + 'yarn test --watch'
  `);
  process.exit(0);

} catch (e) {
  console.error(`Stopping.
  An error occurred:
    + ${e.message}
  `);
  process.exit(1);
}
