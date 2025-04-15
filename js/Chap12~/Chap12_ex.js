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


console.log('====================ex2');
const assert = require('assert');
const arr2 = [1, 2, 3, 4];

const push = (arr, ...p) => [...arr, ...p];


assert.deepStrictEqual(push(arr2, 5, 6), [1, 2, 3, 4, 5, 6]); 
// assert.deepStrictEqual(pop(arr2), 4); 
// assert.deepStrictEqual(pop(arr2, 2), [3, 4]);    // 2개 팝!
// assert.deepStrictEqual(unshift(arr2, 0), [0, 1, 2, 3, 4]);
// assert.deepStrictEqual(unshift(arr2, 7, 8), [7, 8, 1, 2, 3, 4]);
// assert.deepStrictEqual(shift(arr2), [[1], [2, 3, 4]]); // [shift되는 원소들, 남은 원소들]
// assert.deepStrictEqual(shift(arr2, 2), [[1, 2], [3, 4]]); // 2개 shift
// assert.deepStrictEqual(arr2, [1, 2, 3, 4]);

console.log('====================ex3');
//const assert = require('assert');
const arr3 = [1, 2, 3, 4];

//const deleteArray = (orig, ...arr) => orig.splice(...arr);
//푼거 아님, 임시조치
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
const users3 = [Hong, Kim, Lee];

assert.deepStrictEqual(deleteArray(users3, 2), [Hong, Kim]);
assert.deepStrictEqual(deleteArray(users3, 1, 2), [Hong, Lee]);
assert.deepStrictEqual(deleteArray(users3, 'id', 2), [Hong, Lee]);
assert.deepStrictEqual(deleteArray(users3, 'name', 'Lee'), [Hong, Kim]);


console.log('====================ex4');
const addUser = (newUser) => [...users4, newUser];
const removeUser = (delUser) => {
    const place = users4.indexOf(delUser);
    return users4.splice(place, 1);
}
// const test = (delUser) => {
//     const place = users4.indexOf(delUser);
//     console.log(place);
// }


// const changeUser = (privUser, newUser) => {
//     newUser.id = privUser.id;
// };

const hong = { id: 1, name: 'Hong' };
const choi = { id: 5, name: 'Choi' };
const kim = { id: 2, name: 'kim' };
const lee = { id: 3, name: 'Lee' };
const park = { id: 4, name: 'Park' };
const users4 = [kim, lee, park]; // 오염되면 안됨!!
//test(lee);


assert.deepStrictEqual(addUser(hong), [kim, lee, park, hong]);
assert.deepStrictEqual(users4, [kim, lee, park]);
assert.deepStrictEqual(removeUser(lee), [kim, park]);
assert.deepStrictEqual(users4, [kim, lee, park]);
return;
assert.deepStrictEqual(changeUser(kim, choi), [choi, lee, park]);
assert.deepStrictEqual(users4, [kim, lee, park]);
