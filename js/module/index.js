// const assert = require('assert');   // common JS
import assert from 'assert';
import moment from 'moment';
import zz, {PI} from './aa.js';    //default는 {}바깥으로

// console.log('dd >> ', __dirname);   // check esm
const hello = "HellO Module"
console.log(hello, moment().startOf('day').fromNow());
assert.equal(hello, 'HellO Module');

const test = zz();
console.log('aa&PI : ', test, PI);