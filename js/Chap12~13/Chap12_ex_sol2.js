console.log('====================ex7');
const range = (start, end, step = start > end ? -1 : 1) => {
    if(step === 0 || start === end)  return [start];
    // if(start > end && step > 0) return [];
    // if(start < end && step < 0) return [];
    // 위에 두 조건을 한줄로 만들기
    if(((start - end) * step) > 0)  return [];

    // null, !end의 경우, 0을 출력 -> 0을 받는경우 계산이 이상하게됨
    // if(end === undefined) {
    //     if(start > 0) {
    //         end = start;
    //         start = 1;
    //     }
    //     else if(start < 0) {
    //         end = -1;
    //     }
    //     else {
    //         return [0];
    //     }
    // }
    // 이중 if구문 단순화, 백엔드시 참조
    // if(end === undefined && start === 0)    return [0];
    // const t = start;    // 바뀌기 전에 값을 저장
    // end = end ?? (start > 0 ? ((start = 1), t) : -1);

    // 더 단순화, 프론트에서는 플러스점수, 백은 감점
    const t = start;
    end = end ?? (start > 0 ? ((start = 1), t) : (start < 0 ? -1 : 0));
    // 쉼표괄호 연산자 -> 왼쪽부터 오른쪽으로 계산, 맨 오른쪽이 최종값으로 나옴, 쉼표연산자가 정식이름
    // ?? : 병합연산자

    const results = [];
    for(let i = start; start > end ? i >= end : i <= end; i += step) {
        results.push(i);
    }
    return results;
};


const assert = require('assert');

assert.deepStrictEqual(range(1, 10, 1), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
assert.deepStrictEqual(range(1, 10, 2), [1, 3, 5, 7, 9]);
assert.deepStrictEqual(range(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
assert.deepStrictEqual(range(10, 1), [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);

assert.deepStrictEqual(range(5, 5, 0), [5]);
assert.deepStrictEqual(range(1, 5, 0), [1]);
assert.deepStrictEqual(range(5, 5, -1), [5]);
assert.deepStrictEqual(range(5, 5), [5]);
assert.deepStrictEqual(range(0, 0, 5), [0]);
assert.deepStrictEqual(range(1, 5, -1), []);

assert.deepStrictEqual(range(1, 5, 6), [1]);
assert.deepStrictEqual(range(0, 5), [0, 1, 2, 3, 4, 5]);
assert.deepStrictEqual(range(-3, 0), [-3, -2, -1, 0]);

assert.deepStrictEqual(range(5, 1, 1), []);
assert.deepStrictEqual(range(0, -1), [0, -1]);
assert.deepStrictEqual(range(0, -3), [0, -1, -2, -3]);
assert.deepStrictEqual(range(5, 1), [5, 4, 3, 2, 1]);
assert.deepStrictEqual(range(10, 1, -2), [10, 8, 6, 4, 2]);

assert.deepStrictEqual(range(5), [1, 2, 3, 4, 5]);
assert.deepStrictEqual(range(0), [0]);
assert.deepStrictEqual(range(0, 0), [0]);
assert.deepStrictEqual(range(2, 1, -5), [2]);
assert.deepStrictEqual(range(0, -1, -5), [0]);
assert.deepStrictEqual(range(-5), [-5, -4, -3, -2, -1]);
assert.deepStrictEqual(range(50), Array.from({length: 50}, (_, i) => i + 1));
assert.deepStrictEqual(range(1, 150, 3),Array.from({ length: 50 }, (_, i) => i * 3 + 1));

console.log('====================ex8');
//이중루프
function keyPairOnSquare(arr, sum) {
    for(let i = 0; i < arr.length; i += 1) {
        for(let j = i + 1; j < arr.length; j += 1) {
            if(arr[i] + arr[j] === sum) return [i,j];
        }
    }
}

const keyPair = (arr, sum) => {
    const cache = {};
    for(let i = 0; i < arr.length; i += 1) {
        const value = arr[i];
        if(cache[value])    return [cache[value], i];
        cache[sum - value] = i;
    }
};

assert.deepStrictEqual(keyPair([1, 3, 4, 5], 7), [1, 2]);
assert.deepStrictEqual(keyPair([1, 4, 45, 6, 10, 8], 16), [3, 4]);
assert.deepStrictEqual(keyPair([1, 2, 4, 3, 6], 10), [2, 4]);
assert.deepStrictEqual(keyPair([1, 2, 3, 4, 5, 7], 9), [3, 4]);
keyPair([1, 3, 4, 5], 7);             // [1, 2]
keyPair([1, 4, 45, 6, 10, 8], 16);    // [3, 4]
keyPair([1, 2, 4, 3, 6], 10);         // [2, 4]
keyPair([1, 2, 3, 4, 5, 7], 9);       // [3, 4]  or [1, 5]
// cf. O(n^2) ⇒ ⇒ ⇒ O(N) || O(logN)