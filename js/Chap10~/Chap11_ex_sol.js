console.log('====================ex1');
this.name = 'test';
const dog = {
    name : 'Maxx',
    showMyName() {
        console.log(`My name is ${this.name}.`);
    },
    whatsYourName() {
        // way1
        //setTimeout(this.showMyName.bind(dog), 1000); //or this
        
        // way2
        setTimeout(() => {
            // console.log('f.this >>', this);
            this.showMyName();
        }, 1000);
        // const timer = setTimeout(this.showMyName, 1000);
        // timer.name = 'timer';
        // console.log('timer: ', timer);
    },
};
dog.whatsYourName();

console.log('====================ex2');
// 1
const once = f => {
    let done = false;
    return (...args) => {
        if(done)    return;
        done = true;
        return f(...args)
    };
};
const fn = once((x, y) =>  console.log(`금일 운행금지 차량은 끝번호 ${x}, ${y}입니다!`));

fn(1,6);
fn(2,7);
fn(3,8);

// 2
// function fivePart(x, y) {
//     return `fivePart ${x}, ${y}, id: ${this.id}`;
// }
// const fnx = once(fivePart.bind({ id: 11 }));
// console.log(fnx(1,2));
// const fn2 = once(fivePart);
// console.log(fn2.bind({ id: 22 })(3, 4));

// const onceAgain = (f, rebirthDelay) => {
//     let done = false;
//     return (...args) => {
//         if(done)    return;
//         done = true;
//         setTimeout(() => (done = false), rebirthDelay);
//         return f(...args);
//     };
// };

// const fn1sec = onceAgain(fivePart, 1000);
// let cnt = 0;
// const cb = () => console.log(`${++cnt / 10}초`, fn1sec(cnt, 0.1), 0.1);
// setInterval(cb,100);

console.log('====================ex3');
const before = () => console.log('brefore...');
const after = () => console.log('after...');

const someFn = (name, greeting) => console.log(`${greeting}, ${name}`);
const someFn2 =(id, nickname, email, level) => console.log(`${id}/${nickname}/${email}/${level}`);

const template = f => {
    return (...args) => {
        before();
        const result = f(...args);
        // setTimeout(() => after(result), 0);  
        // setImmediate(after, result);

        // 젤 빠른방법(커널 안거치고), 가장 좋은 답
        process.nextTick(after, result);
        return result;
    };
};

const temp = template(someFn);
const temp2 = template(someFn2);

temp('sico', 'hello');
temp2(1, 'sico', 'sico@mail.com', 5);


console.log('====================ex4');
// const weeks = ['일', '월', '화', '수', '목', '금', '토'];
// let widx = -1;
// const getNextWeekBad = () => {
//     widx += 1;  //side-effect
//     if(widx >= weeks.length)    widx = 0;
//     return `${weeks[widx]}요일`;
// };

const getNextWeek = (() => {
    const weeks = ['일', '월', '화', '수', '목', '금', '토'];
    let widx = -1;

    return () => `${weeks[++widx]}요일`
})();

let cntx = 0;
const intl = setInterval(() => {
    // widx += 2;   //side-effect
    console.log('call', cntx, getNextWeek());
    if((cntx += 1) === 7)    clearInterval(intl);}, 1);    // TODO:1000으로 변경필요


console.log('====================ex5');
// 1
function getDiffMillis(dt1, dt2) {
    const d1 = new Date(dt1);
    const d2 = new Date(dt2);

    const { getTime: getTime1 } = d1;
    const { getTime: getTime2 } = d2;
    return getTime1.apply(d1) - getTime2.apply(d2);
}
getDiffMillis('2021-01-01', '2021-01-02');

// 2
class Dog {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    fn() {
        return 'FN';
    }

    static sfn() {  //Dog.sfn
        return 'SFN'; //this를 사용하면 안됨
    }
}
const lucy = new Dog('Lucy');
const { sfn } = Dog;
const { fn : fnorg } = Dog.prototype;
const { name: aa, fn: fnnn, getName } = lucy;  

console.log(aa, sfn(), fnnn(), getName); // ?
console.log('------>', getName.apply(lucy)); // ?