// console.log('=========================ex2');
// const depthTimer = sec => {
//     console.log('depthTimer >>> ', sec);
//     return new Promise(resolve => setTimeput(() => {
//         console.log('depth ' + sec, new Date());
//         resolve(rec + 1);
//         }, sec * 1000)
//     );
// };

// depthTimer(1)
//     .then(res => {
//         console.log('res: ', res);
//         return depthTimer(res);
//     })
//     .then(depthTimer)
//     .fetch(err => console.error(err));

// const r1 = await depthTimer(1);
// const r2 = await depthTimer(r1);
// const r3 = await depthTimer(r2);

// let r = 1;
// while(r <= 3) {
//     r = await depthTimer(r);
// }

console.log('=========================ex3');
const assert = require('assert');
const { promises } = require('fs');

const randTime = value => new Promise(resolve => setTimeout(resolve, 100 * Math.random(), value));

const promiseAll = promises => new Promise((resolve, reject) => {
    const results = [];
    let runCnt = 0;
    for(let i = 0; i < promises.length; i++) {
        promises[i].then(
            res => {
                results[i] = res;
                runCnt += 1;
                if(promises.length === runCnt) resolve(results);
        })
        .catch(reject);
    }
});

console.time('X');
promiseAll([randTime(1), randTime(2), randTime(3)]).then(arr => {
    console.table(arr);
    assert.deepStrictEqual(arr, [1, 2, 3]);
    console.timeEnd('X');
}).catch(console.error);

promiseAll([randTime(11), Promise.reject('RRR'), randTime(33)])
    .then(array => {
        console.log('여긴 과연 호출될까?!', array);
    })
    .catch(error => {
        console.log('reject!!!!!!>>', error);
    });

console.log('=========================ex4');
const randTime4 = value => new Promise(resolve => setTimeout(resolve, 100 * Math.random(), value));

const promiseAllSettled = promises => new Promise((resolve, reject) => {
    const results = [];
    let runCnt = 0;
    for( let i = 0; i < promises.length; i++) {
        promises[i].then(
            value => {
                const status = 'fulfilled';
                results[i] = {status: status, value};
            })
        .catch(reason => {
            const status = 'rejected';
            results[i] = {status: status, reason};
                
        })
        .finally(() => {
            console.log('finaly');
            runCnt += 1;
            if(runCnt === promises.length)  resolve(results);
        });
    }
});

promiseAllSettled([randTime4(11), Promise.reject('RRR'), randTime4(33)])
    .then(array => {
        console.table(array);
        // console.log(JSON.stringify(array, null, '  '));
        console.log('여긴 과연 호출될까?!');
        assert.deepStrictEqual(array, allSettledResults);
    })
    .catch(error => {
    console.log('reject!!!!!!>>', error);
    });
