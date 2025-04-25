"use strict";
const myName = 'Kun'; // annotated type
// let age: unknown = undefined;   // or any
let age;
age = 3;
let lastName = 'Heo'; // | : union
lastName = true;
console.log(`hello ${myName}`);
const something = ({ id, name, age, address }) => {
    console.log(id, name, age, address);
};
// const user = {id: '1', name: 'Hong', age: 33, address: 'Soeul'};    // freshness; 생으로 만들어짐 
//              -> 함수와는 독립적으로 생각됨
const user = { id: '1', name: 'Hong', age: 33, address: 'Soeul' }; // freshness 끄는법1: 구조맞추기
something(user);
let x = 'str'; // value의 중요성(명확성 등))
let y;
y = x;
let z;
if (x)
    z = x; // undefined가 아닌, if구문으로 string으로 줄여짐, if가 type guard
let m;
let g;
let mg;
let cust;
cust = {
    name: '홍길동',
    addr: '용산구',
    discountRate: 0.1,
};
m = cust;
// g = cst;   // type Memebr pass, Guest cannot
mg = cust;
cust = {
    name: '홍길동',
    addr: '용산구',
    discountRate: 0.1,
    age: 26,
};
// m = cust;
// g = cust;    // both cannot pass, 두 type 모두 인정 못받음
mg = cust;
let arr;
let xarr = ['a'];
// if(Array.isArray(xarr))  arr = xarr;
