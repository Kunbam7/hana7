"use strict";
function add(a, b) {
    return a + b;
}
const add2 = (a, b) => a + b; // 굳이 리턴값까지 체크 -> 실행에 시간이 더걸림
const add3 = (a, b) => a + b;
const introduce = (name, height) => {
    // 1. change func height = 0
    console.log(`이름 : ${name}`);
    // 2. 
    console.log(`키 : ${height ?? 0 + 10}`);
    // 3. 실무, undifined 일때 출력하고싶지 않는경우
    if (height)
        console.log(`키 : ${height + 10}`);
    // 4.
    if (height && height >= 0)
        console.log(`키 : ${height + 10}`);
    // 5.값을 반드시 출력해야하는 경우
    if (typeof height === 'number')
        console.log(`키 : ${height + 10}`);
    //Error : 'height' is possibly 'undefined'.
};
introduce("김현준"); // OK
introduce("김현준", undefined); // OK
introduce("김현준", 170); // OK
//----------------------------------------------
const introduce2 = (name, height) => {
    console.log(`이름 : ${name}`);
    if (typeof height === 'number') {
        console.log(`키 : ${height + 10}`);
    }
};
introduce2("김현준", 0); // Error : Expected 2 arguments, but got 1.
introduce2("김현준", undefined); // OK
introduce2("김현준", 170); // OK
//----------------------------------------------
const introduce4 = (name, height = 0) => {
    console.log(`이름 : ${name}`);
    console.log(`키 : ${height + 10}`);
};
introduce4('김현준'); // OK
introduce4('김현준', undefined);
introduce4('김현준', 170);
// introduce4("김현준", "이재현");
// Error: Argument of type 'string' is not assignable to parameter of type 'number'.
//----------------------------------------------
function factorial(n) {
    if (n <= 1)
        return 1;
    return n * factorial(n - 1);
}
const aFactorial = (n) => {
    if (n <= 1)
        return 1;
    return n * aFactorial(n - 1);
};
const saFactorial = (n) => n <= 1 ? n : n * saFactorial(n - 1);
const arr3 = [1, 2, 3];
arr3.map((a, i) => a + i);
//this------------------------------------------
// globalThis.id = 10;
function tfn(x) {
    console.log('tfn', this.id, x);
}
tfn.bind({ id: 1 })('X');
function ntfn(x) {
    console.log('tfn', x);
}
ntfn('Y');
const a = [];
let isobji1 = { id: 1, name: 'Hong', 3: 5 };
let isobj2 = { 3: 5, id: 9, 5: 1 };
const greeting = (greet, name, age) => {
    console.log(`${greet}~ ${name}, You are ${age}`);
    return [name, age];
    // return [name, age];
};
const gr1 = greeting('Hi', 'Hong', 33);
console.log('gr1: ', gr1[0]);
const tup = ['Kim', 55];
greeting('Hello', ...tup);
