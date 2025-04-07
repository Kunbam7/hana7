const n = 1;
const b = true;
const nb = n + b;
console.log("🚀 nb", nb);

const nill = null;
const n_nill = n + nill;
console.log("🚀 n_nill", n_nill);

const undef = undefined;
const n_undef = n + undef;
console.log("🚀 n_undef", n_undef);
console.log("+'' =", +'');
console.log("+undefinded", + undefined);

console.log('========================');
let x = 5;
console.log(3 - - x);
console.log(10 + -x * 2);

//여기에 d쓰는 계산관련 코드 테스트

const dd = 4;
switch(dd) {
    case 1:
        console.log('one');
        break;
    case 4:
        console.log('four');
        return;
    default:
        console.log('*****');
}