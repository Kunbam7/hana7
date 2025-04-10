console.log('=========================ex1_재귀함수');
function makeArray(... n) {
    if(n == 1) return [1];
    return [n , makeArray(n - 1)];
}
const result_makeArray = makeArray(5);
console.log(result_makeArray);

function makeArrayA(n) {
    if(n === 1) return [1];
    return [n, ... makeArrayA(n - 1)];
}
const result = makeArrayA(5);
console.log(result);


console.log('=========================ex2_피보나치수열');
// loop
function loopFibonacci(n) {
    if( n <= 1) {
        return n;
    }
    else {
        let cal1 = 0;
        let cal2 = 1;
        let memory = 0;
        
        for(let i = 2; i <= n; i += 1) {
            memory = cal1 + cal2;
            cal1 = cal2;
            cal2 = memory;
        }
        return memory;
    }
}
const loopCal = loopFibonacci(5);
console.log(loopCal);

// 재귀함수
function recurFibonacci(n) {
    if(n <= 1)  return n;
    return recurFibonacci(n-1) + recurFibonacci(n-2);
}
const recurCal = recurFibonacci(7);
console.log(recurCal);

// memorized
const memoryTable = {};
function memoFibonacci1(n) {
    if(n <= 1)  return n;
    return memoryTable[n] || (memoryTable[n] = recurFibonacci(n-1) + recurFibonacci(n-2));
}
const memoCal1 = memoFibonacci1(30);
console.log(memoCal1);


function memory(fn) {
    const memoryTable = {};
    return function B(k) {
        return  memoryTable[k] ?? (memory[k] = fn(k));
    };
}
const memoFibonacci2 = memory(function A(n) {
    if(n <= 1) return n;
    return memoFibonacci2(n-1) + memoFibonacci2(n-2);
});

const memoCal2 = memoFibonacci2(5);
console.log(memoCal2);