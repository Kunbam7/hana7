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


// 2
assert.deepStrictEqual(telfmt('0101234567'), '010-123-4567');
assert.deepStrictEqual(telfmt('01012345678'), '010-1234-5678');
assert.deepStrictEqual(telfmt('0212345678'), '02-1234-5678');
assert.deepStrictEqual(telfmt('021234567'), '02-123-4567');
assert.deepStrictEqual(telfmt('0331234567'), '033-123-4567');
assert.deepStrictEqual(telfmt('15771577'), '1577-1577');
assert.deepStrictEqual(telfmt('07012341234'), '070-1234-1234');
assert.deepStrictEqual(telfmt('050712345678'), '0507-1234-5678');