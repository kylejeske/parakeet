#!/bin/env node

import prompt from "prompt";
import colors from "colors";

console.log(colors.bgWhite.black("\n\n Scaffolding Builder \n"));

prompt.message = "";
prompt.delimiter = colors.white("::");

prompt.start({
  allowEmpty: false
});

prompt.get({
    properties: {
      name: {
        description: colors.italic.magenta("Enter name of CS Test (ex. cs-array-sets)")
      }
    }
}, (err, result) => {
    if (err) console.log(colors.red(err.message));
    if (result) {
      console.log(`${colors.cyan(`- Building: ${result.name}`)}`);
      prompt.emit('build', result)
    }
});

prompt.on('build', async ({ name }) => {

  // mkdir -p ${name}/
  // yarn init -y
  // yarn add -D jest
  // touch ${name}/question{.js,.test.js}

  // Example for what will go here...
  return await new setTimeout(() => {
    console.log(`\nDone building: ${colors.underline(name)}.\n`);
    prompt.emit('stop');
  }, 1000);
});

prompt.stop = function(){
    if (prompt.stopped || !prompt.started) {
        return;
    }
    stdin.destroy();
    prompt.emit('stop');
    prompt.stopped = true;
    prompt.started = false;
    prompt.paused = false;
    return prompt;
}
