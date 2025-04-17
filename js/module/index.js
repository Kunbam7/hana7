// const assert = require('assert');   // common JS
import assert from 'assert';
import moment from 'moment';

// console.log('dd >> ', __dirname);   // check esm
const hello = "HellO Module"
console.log(hello, moment().startOf('day').fromNow());
assert.equal(hello, 'HellO Module');

