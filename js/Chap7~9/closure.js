// 함수가 함수를 출력
function counter() {
    let count = 0;
    return function cal() {
        count += 1;
        return count;
    };
}
const counter1 = counter();
console.log(counter1());
console.log(counter1());

// curring, 커렌?
const MENU = {chinese : ['j', 't'], italian : ['p', 's']};
function restaurant(kind) {
    const menu = MENU[kind];
    return function(menuIndex) {
        return menu[menuIndex];
    };
}

const lunch = restaurant('chinese');
console.log(lunch(1));
const dinner = restaurant('italian');
console.log(dinner(0), dinner(1));

// 할인금액
function discount() {
    const dcRate = 0.1;
    return function (price) {
        return price * dcRate;
    };
}
/*
// 실무형
function discount(dcPrice) {
    return function(price) {
        return price * dcRate;
    };
}
const dc = discount(숫자);
*/

const items = [{item : '상품-가', price : 32000}, {item : '상품-나', price : 45000}];
const dc = discount();
for (const {item, price : orgPrice} of items) {
    const salePrice = orgPrice - dc(orgPrice);
    console.log(`${item} : ${orgPrice}원 --> ${salePrice.toLocaleString()}원`);
}

// 출입자수 게이트별 계산
function getCounter() {
    let currCount = 0;
    return {
        plus() {currCount += 1; },
        minus() {currCount -= 1; },
        getCount() {return currCount;},
        get count() {return currCount;},
    };
}

const gate1 = getCounter();
const gate2 = getCounter();

gate1.plus();
gate2.plus();
gate2.minus();

console.log('gate1 >> ',gate1.count);
console.log('gate2 >> ',gate2.getCount());


console.log('========================');
let cnt = 0;
function factorial(n) {
    cnt += 1;
    if ( n === 1)    return 1;
    return n * factorial(n-1);
}

const f3 = factorial(3);
console.log(f3, cnt);

let n = 3;
let sum = 1;
for(let i = n; i > 0; i -= 1) {
    console.log(i,sum);
    sum = sum * i;
}
console.log(sum);

console.log('========================TCO');
function factorialTCO(n, acc = 1) {
    if(n === 1) return acc;
    return factorialTCO(n - 1, acc * n);
}
const ftco3 = factorialTCO(3);
console.log(ftco3);

//closure usecase : memorized function
const memoryTable = {};
function memofactorial(n) {
    if(n === 1) return 1;
    return  memoryTable[n] || (memoryTable[n] = n * factorial(n - 1));
}
const memoCal = memofactorial(7);
console.log(memoryTable);
console.log(memoCal);


function memorized(fn) {
    const memoryTable = {};
    return function B(k) {
        return  memoryTable[k] ?? (memoryTable[k] = fn(k));
    };
}

const memorizedFactorial = memorized(function A(n) {
    if(n === 1) return 1;
    return n * memorizedFactorial(n - 1);
});

console.log(memorizedFactorial(3));