function trycatchFn() {
    try {
        throw new Error("error occuered");
    }
    catch(err) {
        console.error(err);
    }
    finally{
        console.log('finally!');
    }
}

const promiseThrow = () => new Promise((resolve, reject) => {
    try {
        setTimeout(() => {
            // throw new Error("error occuered");   // 독립적으로 실행
            reject(new Error('error occuered'));
        }, 1000);
    }
    catch(err) {
        console.error(err);
    }
    finally{
        console.log('finally!');
    }
    console.log('end');
});

promiseThrow()
    .then(console.log)
    .catch(err => console.log('PromiseCatch', err));

const asyncThrow = async () => {
    try {
        await promiseThrow;
        // throw new Error("error occuered AGAIN");
    }
    catch(err) {
        console.error(err);
    }
    finally{
        console.log('finally!');
    }
};

// asyncThrow()

const afterTime = (sec) => new Promise(resolve => 
    setTimeout(resolve, sec * 1000, sec));

console.time('MapTime');
const mapResult = [1, 2, 3].map(async (val, i) => {
    const r = await afterTime(val);
    console.log('r: ', r, i);
    if(i === 2) console.timeEnd('MapTime', i);
    return r;
});
console.log('mapResult: ', mapResult);


const mapResults = [1, 2, 3].map(async (val, i) => afterTime(val));
console.log('mapResults: ', mapResults);
const results = await Promise.all(mapResults);
