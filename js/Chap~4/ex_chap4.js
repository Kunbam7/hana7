/*
//for 구문 출력문제
for(let i = 1; i < 11; i +=1 ) {
    console.log(i/10);
}
console.log('==================');

//1 ~ 10 제곱근 소수점 3자리
for(let i = 1; i < 11; i += 1) {
    let s = Math.sqrt(i);
    if (!Number.isInteger(s)){
        const results = Math.round(1000*s);
        console.log(i, results/1000);
    }
}
console.log('==================');

//요일 출력
const WEEK_NAMES = '일월화수목금토';
const today = new Date();
//today.getDay();
//console.log(today.getDay());

console.log('오늘은 ', WEEK_NAMES[today.getDay()]+'요일', '입니다');
console.log('==================');

//addPoints 함수
function addPoints1(a, b) {
    let sa = a;
    let ad = 1;
    let sb = b;
    let bd = 1;
    
    
    while(!Number.isInteger(sa)) {
        sa = sa * (10 ** ad);   //계산이 두번 반복됨 > 기존에 제곰수가 느는데, 거기에다가 곱한걸 저장해서 또곱함
        if(Number.isInteger(sa)) break;
        else                     ad += 1;
    }
    
    while(!Number.isInteger(sb)) {
        sb = sb * (10 ** bd);
        console.log('::', bd);
        if(Number.isInteger(sb)) break;
        else                     bd += 1;
    }
    //console.log(sa, sb);
    console.log(ad, bd);
    
    if(ad > bd) console.log((a + b).toFixed(ad));
    else        console.log((a + b).toFixed(bd));
}

//고친거 : 제대로 출력됨
//cpu를 좀 갈구는 방식(작은계산 연속됨) -> 반복되는 것을 최소화시키기가 필요 -> 그걸 하는게 2way
function addPoints2(a, b) {
    let sa = a;
    let ad = 1;
    let sb = b;
    let bd = 1;
    
    while(!Number.isInteger(sa)) {
        sa = a * (10 ** ad);
        if(Number.isInteger(sa)) break;
        else                     ad += 1;
    }
    while(!Number.isInteger(sb)) {
        sb = b * (10 ** bd);
        if(Number.isInteger(sb)) break;
        else                     bd += 1;
    }
    
    console.log(+(a + b).toFixed(ad > bd ? ad : bd));  //앞에+ 붙여서 문자에서 숫자화
}

addPoints2(0.21354, 0.1)     // 0.31354
addPoints2(0.14, 0.28)       // 0.42
addPoints2(0.34, 0.226)      // 0.566
addPoints2(10.34, 200.226)   // 210.566
addPoints2(0.143, -10.28)    // -10.137
addPoints2(0.143, -10)       // -9.857
*/

//소수베열의 평균의 소수점 2자리 계산
const prices = [10.34, 'xxx', 5.678, null, 20.9, 1.005, 0, 15, undefined, 0.5];

function calc(... args) {
    const p = 10 ** 5;
    let sum = 0;
    let i = 0;

    for(const n of args) {
        if(isNaN(n)) {
            sum += n;
            i += 1;
            console.log(i);
        }
    }
    const sumF = sum * p;
    const results = Math.trunc(sumF/i)/p;
    console.log(results.toFixed(2));
}
calc(prices)

//avg : 10.78