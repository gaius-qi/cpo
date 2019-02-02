'use strict';

const runScript = require('runscript');
const copy = require('copy-paste').copy;
const chalk = require('chalk');

module.exports = (cmd) => {
  runScript(cmd, { stdio: 'pipe' })
    .then(stdio => {
      const stdout = stdio.stdout.toString().trim();
      copy(stdout);
      console.log(`${chalk.cyan('Command output has been copied to your clipboard:')}\n${stdout}`);
    })
    .catch(err => {
      console.error(`${chalk.red(err)}`);
    });
};
