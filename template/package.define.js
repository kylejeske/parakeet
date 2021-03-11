export const problemPackage = name => ({
  "name": `@kylejeske/parakeet-test-${name}`,
  "version": "0.0.1",
  "main": "index.js",
  "author": "package-builder",
  "type": "module",
  "license": "MIT",
  "scripts": {
    "test": "NODE_OPTIONS='--experimental-vm-modules --no-warnings' npx jest"
  },
  "dependencies": {
    "jest": "^26.6.3"
  }
});
