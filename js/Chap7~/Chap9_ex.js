console.log('=========================ex1_재귀함수');
function makeArray(... n) {
    if(n == 1) return [1];
    return [n , makeArray(n - 1)];
}
const result_makeArray = makeArray(5);
console.log(result_makeArray);


console.log('=========================ex2_재귀함수');