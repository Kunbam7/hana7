console.log('======================ex1');
const arr = [100, 200, 300, 400, 500, 600, 700];
// 1
for(let k in arr) {
    console.log(k);
}
// 2
for(let k in arr) {
    console.log(arr[k]);
}
const obj = {name : 'Kim', addr : 'Yongsan', level : 1, role : 9, receive : false};
// 3
for(let k in obj) {
    console.log(k);
}
// 4
for(let k in obj) {
    console.log(obj[k]);
}
// 5
// for(let k of obj) {
//     console.log(k);
// }
// 6

// 7
Object.defineProperty(obj, 'role');
// Object.freeze(obj[role]);

console.log('======================ex2');
data = [['A', 10, 20], ['B', 20, 40], ['C', 50, 60, 70]]

console.log(data);

dataObj = {'A' : [10, 20], 'B' : [30, 40], 'C' : [50, 60, 70]}