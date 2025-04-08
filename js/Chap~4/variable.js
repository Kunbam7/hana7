// B: byte
const n = 123;      //8B
const bi = 123n;    //16B

const n___bi1 = n === bi;
console.log("🚀 ~ n_bi1:", n___bi1)

const n__bi1 = n == bi;
console.log("🚀 ~ n_bi1:", n__bi1)

//  작은 메모리를 가진 변수를 키우기
const nAdbi = BigInt(n) + bi;
console.log("🚀 ~ nAdbi:",nAdbi, typeof nAdbi);

const s = 'abc';                //8B
const ss = new String('abc');   //16B
const s__ss = s == ss;
console.log("🚀 ~ s__ss:", s__ss, typeof s);
const s___ss = s === ss;
console.log("🚀 ~ s__ss:", s___ss, typeof ss);  //객체라서
const sNum = Number(s);
console.log("🚀 ~ sNum:", sNum);
const ssNum = Number(ss);
console.log('Num(s) == Num(ss) = ', sNum == ssNum, isNaN(sNum));

const sss = `${s} - ${n + Number(bi)}`;
// s + '-' + (n + Number(bi)
// ``는 ~를 시프트없이 클릭
console.log("🚀 ~ sss:", sss);

console.log('-----------------------------');
const s1 = Symbol('foo');
const s2 = Symbol('foo');
const s1__s2 = s1 == s2;
console.log("🚀 ~ s1__s2:", s1__s2);
const seoulHong = Symbol.for('H');
const busanHong = Symbol.for('H');
const s__p = seoulHong == busanHong;
console.log("🚀 ~ s__p:", s__p);

const unDef = undefined;
const nil = null;
const unDef__nil = unDef == nil;
const unDef___nil = unDef === nil;
console.log("🚀 ~ unDef__nil:", unDef__nil);
console.log("🚀 ~ unDef___nil:", unDef___nil);
console.log('=========================');

const hong = {id:1, name:'Hong'};       //객체타입
let kim = {id:Symbol(), name:'Kim'};    //
//hoist 때문에 kim이 먼저선언됨
console.log(hong === kim);
kim = hong;
console.log(hong === kim);

const o1 = new Object();
const o2 = {} ;
console.log('o1 == o2', o1==o2);

const nStr = n.toString()
const nStr2 = new Number(n).toString();
console.log("🚀 ~ nStr:", nStr, nStr2, typeof n);

const nStr16 = n.toString(16);
console.log("🚀 ~ nStr16:", nStr16);
const nStr16d = parseInt(nStr16, 16);
console.log("🚀 ~ nStr16d:", nStr16d);

console.log('-----------------------------');
const d1 = Date();
const d2 = new Date();
console.log("🚀 d1 == d2", d1 == d2);

