const argv = require('argv');
const echo = require('../lib/echo');
console.log(echo(argv.join(' ')));