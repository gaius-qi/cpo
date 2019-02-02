#!/usr/bin/env node

'use strict';

const program = require('commander');
const copy = require('../lib/copy');


program
  .version('1.0.0')
  .description('Simple and fast copy command output')
  .parse(process.argv);

const cmd = process.argv.slice(2).join(' ');
copy(cmd);

