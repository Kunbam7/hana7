const hong = { id: 1, name: 'Hong' };
const kim = { id: 2, name: 'Kim' };
const lee = { id: 3, name: 'Lee' };
const park = { id: 4, name: 'Park' };
const users = [hong, kim, lee, park];

const find3 = a => a.id === 3;  // (a,i)
const idxId2 = users.findIndex(find3);
console.log('idxId2: ', idxId2);

const findId = (pid) => a => a.id === pid;
// 풀어쓰기
function f(x) {
    return function (a) {
        return a.id === x;
    }
}

const idxId01 = users.findLastIndex(f(3));
console.log('idxId01: ', idxId01);
const idxId11 = users.findLastIndex(findId(3));
console.log('idxId11: ', idxId11);

const ids = users.map(a => a.id);
console.log('ids: ', ids);
// 풀어쓰기
const idsF = users.map(function (a) { return a.id});

Array.prototype.map = function (f) {
    for(let i = 0; i < this.length; i +=1) {
        results[i] = f(this[i], i, this);
        console.log(`results[${i}]: `, results);
    }
    return results;
}
// 단순화 -> 수업보고 확인
// Array.prototype.forEach((a, i) {

// }); 


Array.prototype.pushO = function (x) {
    console.log('x: ', x);
    this[this.length] = x;
};


Array.prototype.mapBy = function (k) {
    const results = [];
    for(let i = 0; i < this.length; i += 1) {
        results.push(this[i][k]);
    }
    return results;
};

const ids2 = users.mapBy('id');
console.log('ids2: ', ids2);
const names = users.mapBy('name');
console.log('name: ', names);

