console.log('====================ex1');
const arr1 = [1, 2, 3, 4, 5];

// 1
const ex1 = arr1.slice(1,3);
console.log(ex1);

// 2
const ex2 = arr1.slice(2);
console.log(ex2);

// 3
const ex3 = arr1.splice(1,3);
console.log(ex3, '==>', arr1);

// 4
const ex4 = arr1.splice(1,0, ...ex3);
console.log(ex4, '==>', arr1);

//5
const ex5 = arr1.splice(2);
console.log(ex5, '==>', arr1);

// 6
const ex6 = arr1.splice(2, 0, ...ex5);
console.log(ex6, '==>', arr1);
// 7
arr1.splice(2, Infinity, 'X', 'Y', 'Z', 4, 5);
console.log('ex7-1 ==>', arr1);

arr1.splice(2, 3, 3);
console.log('restore ', arr1);

arr1.splice(2, 1, 'X', 'Y', 'Z');
console.log('ex7-2 ==> ', arr1);
// 8
const ex8 = [... arr1.slice(0, 2), 'X', 'Y', 'Z', ... arr1.slice(-2)];
console.log('ex8 => ', ex8);


console.log('====================ex2');
const assert = require('assert');
const arr2 = [1, 2, 3, 4];
// 1
// function push(arr, ...p) {
//     return [... arr, ...p];
// }
// 2
const push = (arr, ...p) => [...arr, ...p];
const pop = (arr, count) => (count ? arr.slice(-count) : arr.at(-1));
const unshift = (arr, ...p) => [...p, ...arr];
const shift = (arr, count = 1) => [arr.slice(0,count), arr.slice(count)];

assert.deepStrictEqual(push(arr2, 5, 6), [1, 2, 3, 4, 5, 6]); 
assert.deepStrictEqual(pop(arr2), 4); 
assert.deepStrictEqual(pop(arr2, 2), [3, 4]);    // 2개 팝!
assert.deepStrictEqual(unshift(arr2, 0), [0, 1, 2, 3, 4]);
assert.deepStrictEqual(unshift(arr2, 7, 8), [7, 8, 1, 2, 3, 4]);
assert.deepStrictEqual(shift(arr2), [[1], [2, 3, 4]]); // [shift되는 원소들, 남은 원소들]
assert.deepStrictEqual(shift(arr2, 2), [[1, 2], [3, 4]]); // 2개 shift
assert.deepStrictEqual(arr2, [1, 2, 3, 4]);


console.log('====================ex3');
//const assert = require('assert');
const arr3 = [1, 2, 3, 4];

const deleteArray = (arr, startOrKey, endOrValue) => {
    if(typeof startOrKey === 'string') {
        return arr.filter(a => a[startOrKey] !== );
    }
    else {
        return arr.filter((_, i) => i < startOrKey || i >= endOrValue);
    }
};

assert.deepStrictEqual(deleteArray(arr3, 2), [1, 2]);    // 2부터 끝까지 지우고 나머지 리턴
assert.deepStrictEqual(deleteArray(arr3, 1, 3), [1, 4]); // 1부터 3미만까지 지우고 나머지 리턴
console.log(deleteArray(arr3, 2));
assert.deepStrictEqual(arr3, [1, 2, 3, 4]);

const Hong = { id: 1, name: 'Hong' };
const Kim = { id: 2, name: 'Kim' };
const Lee = { id: 3, name: 'Lee' };
const users = [Hong, Kim, Lee];

assert.deepStrictEqual(deleteArray(users, 2), [Hong, Kim]);
assert.deepStrictEqual(deleteArray(users, 1, 2), [Hong, Lee]);
assert.deepStrictEqual(deleteArray(users, 'id', 2), [Hong, Lee]);
assert.deepStrictEqual(deleteArray(users, 'name', 'Lee'), [Hong, Kim]);