//for 구문 출력문제
for (let i = 0.1; i <= 1; i = i + 0.1) {
    console.log(i.toFixed(1));
}
console.log('==================');

//1 ~ 10 제곱근 소수점 3자리
for(let i = 1; i <= 10; i += 1) {
    const root = Math.sqrt(i);
    if(root % 1) console.log(i, root.toFixed(3));
    //console.log(root);
}
console.log('==================');

//요일 출력
// new는 연산자(operator)
const today = new Date().getDay();
let weekName = '일월화수목금토'[today]; //더 단순화
console.log(weekName); 
//스위치 사용
switch(today) {
    case 0:
        weekName = '일';
        break;
    case 1:
        weekName = '월';
        break;
    case 2:
        weekName = '화';
        break;
    //3 ~ 6생략
    default:
        weekName = '알수없음';
        break;
}
console.log(`오늘은 ${weekName}요일입니다.`);
// ``은 알트(옵션) + ₩
console.log('==================');

//addPoints 함수
//way 1
function pLength(n) {
    return n.toString().length - Math.trunc(n).toString().length - 1;
}

function addPoints(a,b) {
    //decimal.js -> 소수점 계산용 import
    // way 1
    const aLen = pLength(a);
    const bLen = pLength(b);
    const cal1 = (a + b).toFixed(aLen > bLen ? aLen : bLen);
    console.log(cal1);

    //way 2
    // 문자계산은 부담이 큼 -> 가능한한 숫자로만 계산하는 방법
    const p = 10 ** 10;
    const ai = a * p;
    const bi = b * p;
    const cal2 = Math.trunc(ai + bi) / p;   //요걸 생각안했네;
    console.log(cal2);
}

//way 3
function addPoints3(... args) {
    p = 10 ** 10;
    let ret = 0;
    for(const n of args) {
        ret += Math.trunc(n*p);
        console.log(n, ret);
    }
    ret = ret / p;
    console.log(args.join(' + '), '= ', ret);
}

//wawy 4 (+- 모두 계산)
function subP(... args) {
    calc(-1, ... args);
}
function addP(... args) {
    calc(+1, ... args);
}

function calc(signFlag, ... args) {
    p = 10 ** 10;
    let ret = 0;
    for(const [i, n] of Object.entries(args)) {
        const signNum = i !== 0 ? n * signFlag : n;
        ret += Math.trunc(signNum * p);
        console.log(n, ret);
    }
    ret = ret / p;
    console.log(args.join(signFlag > 0 ? '+' : '-'), ' = ', ret);
}

addPoints3(0.21354, 0.1)     // 0.31354

addPoints(0.21354, 0.1)     // 0.31354
addPoints(0.14, 0.28)       // 0.42
addPoints(0.34, 0.226)      // 0.566
addPoints(10.34, 200.226)   // 210.566
addPoints(0.143, -10.28)    // -10.137
addPoints(0.143, -10)       // -9.857

//소수베열의 평균의 소수점 2자리 계산
const prices = [10.34, 'xxx', 5.678, null, 20.9, 1.005, 0, 18, undefined, 0.5];
//null은 숫자로치면 0 -> isNaN true 나옴

const P = 10 ** 10;
let sum = 0;
let cnt = 0;

for(const n of prices) {
    if(isNaN(n) || n == null) continue;
    cnt += 1;
    sum += Math.trunc(n * P);
}
c//onst avg = (sum / (cnt * p)).toFixed(2);

//toFixed안쓰고 해결하기
const avg = Math.trunc((sum / (cnt * P)) * 100) / 100;

console.log(avg);