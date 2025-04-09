console.log('=========================ex1_재귀함수');
function makeArray(n) {
    if ( n === 1) return [1];
    return [... makeArray(n - 1), n];
}

const ma10 = makeArray(10);
console.log(ma10);

function makeReverseArray(n) {
    if ( n === 1) return [1];
    return [n, ... makeReverseArray(n - 1)];
}

const mra5 = makeReverseArray(5);
console.log(mra5);
//TCO
function makeArrayTCO(n, acc = []) {
    if( n === 1)    return [1, ... acc];
    return  makeArrayTCO(n - 1, [n, ...acc]);
}

const maTco10 = makeArrayTCO(10);
console.log(maTco10);