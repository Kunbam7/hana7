console.log('=================ex1');
const total = {price: 45000, vat: 4500};
console.log(fmt`주문합계: ${total.price}원`);
console.log(fmt`세액합계: ${total.vat}원`);

function fmt(txts, value) {
    // console.log(txts, value);
    return `${txts[0]}${value.toLocaleString().padStart(8)}${txts[1]}`;
}

console.log('=================ex2');
// 1-1
const upperToLower = str => str.replace(/[A-Z]/g, foundStr => foundStr.toLowerCase());
const low = upperToLower('Senior Coding Learning JS');
console.log('low: ', low);

// 1-2
const assert = require('assert');
const swapCase = str => 

assert.equal(swapCase('Senior Coding Learning JS'), 'sENIOR cODING lEARNING js');
assert.equal(swapCase('Hanaro 4 Class'), 'hANARO 4 cLASS');
