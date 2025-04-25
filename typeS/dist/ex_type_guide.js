"use strict";
console.log('ex1-1=============================');
const isStringNumber = (value) => Array.isArray(value) && // array.length >= 2 인넣는 이유: 1) string만의 가능성 2) 이미 array 체크로 몇개인지 체크함, 즉 이중체크
    typeof value[0] === 'string' && value[1] === 'number';
// typeof value === 'string' || value === 'number';
// typeof value[0] === 'string'; -> undefined, type 정의 내지 체크가 우선임
const f1 = (value) => {
    if (isStringNumber(value)) {
        console.log(value[0].toUpperCase(), value[1].toFixed());
    }
};
f1(['item', 1000]);
console.log('ex1-2=============================');
class Retriever {
    name;
    constructor(name) {
        this.name = name;
    }
}
function isDog(a) {
    return 'name' in a && typeof a.name === 'string';
    // 순서 바꾸면 안됨 -> undefined error
    // return a instanceof Retriever; -> class > function이라 안됨.
}
const maxx = { name: 'Maxx' };
if (isDog(maxx))
    console.log(maxx.name, 'isDog');
const gunhee = new Retriever('Gunhee');
if (isDog(gunhee))
    console.log(gunhee.name, 'isDog');
console.log('ex2-1=============================');
const cart = {
    X: 1,
    Y: 2,
    Z: 3,
};
console.log('ex2-2=============================');
const constCart = {
    X: 1,
    Y: 2,
    Z: 3,
}; // 안전성(조작 불가하게)을 위해 반드시 붙여야함
const xCart = { x: 1, y: 'str' };
type;
console.log('ex3===============================');
// const toErrorWithMesseage
try {
    // throw new Error('some error!!!!');   // 가
    // throw 'some string error!!!';        // 나
    throw ['some', 'array', 'error']; // 다
}
catch (error) {
    console.log(error.message); // (라)
}
