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




console.log('====================ex4');
//const assert = require('assert');
const arr3 = [1, 2, 3, 4];

const deleteArray = (array, startOrKey, endOrValue) => {
    if (typeof startOrKey === 'string') {
        return array.filter(a => a[startOrKey] !== endOrValue);
    } else {
        return array.filter((_, i) => i < startOrKey || i >= endOrValue);
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

const addUser = newUser => [...users4, newUser];
// const removeUser = delUser => users4.filter(u => u.id !== delUser.id);
// const removeUser = delUser => users4.filter({id}) => id !== delUser.id;
// 단순화
const removeUser = ({id: pid}) => users4.filter(({id}) => id !== pid);
const changeUser = (from, to) => users4.map(user => user.id === from.id ? to : user);

const hong = { id: 1, name: 'Hong' };
const choi = { id: 5, name: 'Choi' };
const kim = { id: 2, name: 'kim' };
const lee = { id: 3, name: 'Lee' };
const park = { id: 4, name: 'Park' };
const users4 = [kim, lee, park]; // 오염되면 안됨!!

assert.deepStrictEqual(addUser(hong), [kim, lee, park, hong]);
assert.deepStrictEqual(users4, [kim, lee, park]);
assert.deepStrictEqual(removeUser(lee), [kim, park]);
assert.deepStrictEqual(users4, [kim, lee, park]);
assert.deepStrictEqual(changeUser(kim, choi), [choi, lee, park]);
assert.deepStrictEqual(users4, [kim, lee, park]);


console.log('====================ex5');
const arr5 = [1, 2, 3, true];
arr5.push(true);

// 1) 배열의 각 원소를 String으로 변환하시오
// const ret arr4.map(a => String(a));
// (n) => String(n)
// String(n)
const ret1 = arr5.map(String);  // String(n)
assert.deepStrictEqual(ret1, ['1', '2', '3', 'true']);

// 2) 다음과 같이 작동하는 classNames 함수를 작성하시오.
const classNames = (...args) => 
    args
    .filter(Boolean)    // <=== a => Boolean(a) <=== a => !!a
    // .map(a => a)  ->
    .join(' '); 
const ret2 = classNames('', 'a b c', 'd', '', 'e'); 
assert.strictEqual(ret2, 'a b c d e'); 
// 주의: ' a b c d  e'면 안됨!!


console.log('====================ex6');
const reduce = (arr, fn, initValue) => {
    let i = 0;
    let acc = initValue ?? (i++, arr[0]);
    for(; i < arr.length; i+= 1) {
        acc = fn(acc, arr[i], i, arr);
    }
    return acc;
};

const a10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
assert.deepStrictEqual(
    reduce(a10, (acc, cur) => acc + cur, 0),
    a10.reduce((acc, cur) => acc + cur, 0)
);

assert.deepStrictEqual(
    reduce(users, (acc, user) => acc + user.name),
    users.reduce((acc, user) => acc + user.name)
);

assert.deepStrictEqual(
    reduce(a10, (acc, cur) => acc + cur, 0),
    a10.reduce((acc, cur) => acc + cur, 0)
);
assert.deepStrictEqual(
    reduce(a10, (acc, cur) => acc + cur),
    a10.reduce((acc, cur) => acc + cur)
);
assert.deepStrictEqual(
    reduce([1, 2, 3, 4, 5], (a, b) => a * b, 1),
    [1, 2, 3, 4, 5].reduce((a, b) => a * b, 1)
);

assert.deepStrictEqual(
    reduce(users, (acc, user) => acc + user.name),
    users.reduce((acc, user) => acc + user.name)
);
