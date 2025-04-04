//for 구문 출력문제
for(let i = 1; i < 11; i+=1) {
    console.log(i/10);
}
console.log('==================');

//1 ~ 10 제곱근 소수점 3자리
for(let i = 1; i < 11; i+=1) {
    let s = Math.sqrt(i);
    if (!Number.isInteger(s)){
        results = Math.trunc(1000*s);
        console.log(results/1000);
    }
}
console.log('==================');

//요일 출력

console.log('==================');

//addPoints 함수
function addPoints(a, b) {

}
addPoints(0.21354, 0.1)     // 0.31354
addPoints(0.14, 0.28)       // 0.42
addPoints(0.34, 0.226)      // 0.566
addPoints(10.34, 200.226)   // 210.566
addPoints(0.143, -10.28)    // -10.137
addPoints(0.143, -10)       // -9.857
