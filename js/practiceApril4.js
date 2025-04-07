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
function addPoints(a, b) {
    let sa = a;
    let ad = 1;
    let sb = b;
    let bd = 1;
    
    //String으로 받아진듯? 근데 왜...? 이거 계산 인테자로 된거 아닌가;
    while(!Number.isInteger(sa)) {
        sa = sa * (10 ** ad);
        if(Number.isInteger(sa)) break;
        else                     ad += 1;
    }
    
    while(!Number.isInteger(sb)) {
        sb = sb * (10 ** bd);
        //console.log(bd);
        if(Number.isInteger(sb)) break;
        else                     bd += 1;
    }
    //console.log(sb);
    
    if(ad > bd) console.log((a + b).toFixed(ad));
    else        console.log((a + b).toFixed(bd));
}
addPoints(0.21354, 0.1)     // 0.31354
addPoints(0.14, 0.28)       // 0.42
addPoints(0.34, 0.226)      // 0.566
addPoints(10.34, 200.226)   // 210.566
addPoints(0.143, -10.28)    // -10.137
addPoints(0.143, -10)       // -9.857