// 덜함 -> 수업 영상보면서 다시해볼것

console.log('======================ex1');
const arr = [100, 200, 300, 400, 500, 600, 700];
// 1, 2
for(const k in arr) {   //for 자체()가 하나의 블록이라 생각할것
    console.log(k, arr[k]);
}
const obj = {name : 'Kim', addr : 'Yongsan', level : 1, role : 9, receive : false};
// 3, 4
for(const k in obj) {
    console.log(k, obj[k]);
}
// 5
for(const v of Object.values(obj)) {
    console.log(v);
}
// 6
Object.defineProperty(obj, 'level', {enumerable : false});
// 7
Object.freeze(obj, 'role'); // 표현법의 문제?

console.log('======================ex2');
const assert = require('assert');

data = [['A', 10, 20], ['B', 20, 40], ['C', 50, 60, 70]]
function makekObjecetFromArray(arr) {
    // way1
    let retObj = {};
    for(const [k, ...v] of arr) {
        // way1 : backend
        retObj[k] = v;

        // way2 : front-end
        retObj = { ...retObj, [k]: v};
    }
    return retObj;
}
console.log(makekObjecetFromArray(data));

dataObj = {'A' : [10, 20], 'B' : [30, 40], 'C' : [50, 60, 70]}
function makekArrayFromObject(arr) {
    let retArr = [];
    for(const [k,v] of Object.entries(arr)) {
        // way1 : backend
        retArr.push([k, ...v]);
        
        // way2 : front-end
        retArr = [...retArr, [k, ...v]];
    }
}
//ssert.deepStrictEqual(makekArrayFromObject(dataObj), {'A' : [10, 20], 'B' : [30, 40], 'C' : [50, 60, 70]});
console.log(makekArrayFromObject(dataObj));

console.log('======================ex3');
// 1. shallow copy
const kim = {nid: 3, nm: 'Kim', addr: 'Pusan'};

const newKim1 = { ...kim};

//newKimi = shallowCopy(kim);
newKiml.addr = 'Daegu';
console.log(kim.addr !== newKim1.addr);


