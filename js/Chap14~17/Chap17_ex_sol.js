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
const { TransformStreamDefaultController } = require('stream/web');
const swapCase = str =>
    str.replace(/([A-Z\s\d]*)([a-z]*)/g,
        //? : null이 있을가능성때문, * : 대문자나 소문자가 없을 가능성, 순서가 대-소가 아닌 경우 고려
        (foundStr, upper, lower) => { 
            if (!foundStr?.trim()) return '';
            return `${upper.toLowerCase()}${lower.toUpperCase()}`;
        });

const swapCaseSol = str =>
    str?.replace(/([A-Z]+)([a-z]*)/g,
        //? : null이 있을가능성때문, * : 대문자나 소문자가 없을 가능성, 순서가 대-소가 아닌 경우 고려
        (upper, lower) => `${upper.toLowerCase()}${lower.toUpperCase()}`);    

const swapCase2 = str => str?.replace(/([A-Z\s]*)([a-z]*)/g
    , (founStr, upper, lower) => {
        return `${upper.toLowerCase()}${lower.toUpperCase()}`;
    });

assert.equal(swapCase('Senior Coding Learning JS'), 'sENIOR cODING lEARNING js');
assert.equal(swapCase('Hanaro 4 Class'), 'hANARO 4 cLASS');
assert.equal(swapCase('test For starting Low words'), 'TEST fOR STARTING lOW WORDS');


// 2
const telfmt = telno => {
    const len = telno?.length ?? 0;
    if(len <= 7)    return telno;
    // 8자 => 4-4
    if(len === 8)   return `${telno.substring(0,4)}-${telno.substring(4)}`;

    let a = telno.startsWith('02') ? 2 : len > 10 ? len - 8 : 3;
    let b = len - a - 4;
    // /abc/ = "abc"
    const reg = new RegExp(`(\\d{${a}})(\\d{${b}})(\\d{4})`);
    return telno.replace(reg, '$1-$2-$3');
};

assert.deepStrictEqual(telfmt('0101234567'), '010-123-4567');
assert.deepStrictEqual(telfmt('01012345678'), '010-1234-5678');
assert.deepStrictEqual(telfmt('0212345678'), '02-1234-5678');
assert.deepStrictEqual(telfmt('021234567'), '02-123-4567');
assert.deepStrictEqual(telfmt('0331234567'), '033-123-4567');
assert.deepStrictEqual(telfmt('15771577'), '1577-1577');
assert.deepStrictEqual(telfmt('07012341234'), '070-1234-1234');
assert.deepStrictEqual(telfmt('050712345678'), '0507-1234-5678');