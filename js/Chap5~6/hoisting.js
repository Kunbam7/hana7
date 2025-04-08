var zz;
function add(a,b) {
    return a+ b;
}
// ========================================
//hoisting

console.log('11 = ', zz); 
// ReferenceError: zz is not defined

zz = 9;  // 이 라인 실행 시 암묵적 var!
console.log('22 = ', zz);     // OK
console.log(globalThis['zz']);

zz = 9; //undefind 생략, notInitializedYet 플래그 -> unefined, freshness off
        //let, const 위치에 따라 에러발생할 수 있음
//console.log(this);
//console.log(globalThis);