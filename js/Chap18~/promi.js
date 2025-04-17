class PromiseX {
    constructor(nbfn) {
        nbfn(this.runSuccess.bind(this), this.runFail.bind(this));
        // return this 생략되있는 형태
    }

    runSuccess(ret) {
        this.thenFn(ret);
    }

    runFail(err) {
        this.catchFn(err);
    }

    then(f) {
        console.log('then >> ', f);
        this.thenFn = f;
        return this;
    }

    catch(errFn) {
        this.catchFn = errFn;
    }
}

// function promi(delay) {return new Promise(); }
const promi = delay => new PromiseX(
    (resolve, reject) => {
        // setTimeout(() => resolve('done'), delay);
        // setTimeout(resolve, delay, 'done!');
        setTimeout(reject, delay, 'error!');
    });

// promi(1000, console.log); //callback pattern
// promi(1000).then(res => console.log(res));
promi(1000)
    .then(console.log)  // 더 단순화, console.log가 함수
    .catch(err => console.log('Error', err));


console.log('half time!!');

(async function () {
    await new Promise((resolve, reject) => setTimeout(resolve, 2000));
    console.log('************');
})();
    
console.log('The end');