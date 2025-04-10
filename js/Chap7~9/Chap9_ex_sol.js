console.log('=========================ex1_재귀함수');
// 정순으로 array 입력 및 출력
function makeArray(n) {
    if ( n === 1) return [1];
    return [... makeArray(n - 1), n];
}
const ma10 = makeArray(10);
console.log(ma10);

// 역순
function makeReverseArray(n) {
    if ( n === 1) return [1];
    return [n, ... makeReverseArray(n - 1)];
}
const mra5 = makeReverseArray(5);
console.log(mra5);

// TCO
function makeArrayTCO(n, acc = []) {
    if( n === 1)    return [1, ... acc];
    return  makeArrayTCO(n - 1, [n, ...acc]);
}
const maTco10 = makeArrayTCO(10);
console.log(maTco10);

console.log('=========================ex2_피보나치수열');
// loop
let loopRunCnt = 0;             //성능 측정
function loopFibonacci(n) {
    if( n <= 1) {
        return n;
    }
    else {
        let cal1 = 0;
        let cal2 = 1;
        
        for(let i = 2; i <= n; i += 1) {
            loopRunCnt += 1;
            // way1, 명령형 프로그램
            // let memory = cal1;
            // cal1 = cal2;
            // cal2 = memory + cal2;

            // way2
            [cal1, cal2] = [cal2, cal1 + cal2];
        }
        return cal2;
    }
}
const loopCal = loopFibonacci(7);
console.log(loopCal);

// 재귀함수, 선언형 프로그램, 풀스택을 쌓아가서 loop대비 성능 떨어짐
let recurRunCnt = 0;
function recurFibonacci(n) {
    recurRunCnt += 1;
    if(n <= 1)  return n;
    return recurFibonacci(n - 2) + recurFibonacci( n - 1);
}
const recurCal = recurFibonacci(7);
console.log(recurCal);

// memorized
let memoRunCnt = 0;
const memoFibonacci = memoized(function(n) {
    memoRunCnt += 1;
    if( n <= 1)  return n;
    return memoFibonacci(n - 2) + memoFibonacci(n - 1);
});

function memoized(fn) {
    const cashe = {};
    return function (k) {
        return  cashe[k] || (cashe[k] = fn(k));
    };
}
const memoCal = memoFibonacci(7);
console.log(memoCal);

console.log('loop: ', loopRunCnt);
console.log('recu: ', recurRunCnt);
console.log('memo: ', memoRunCnt);