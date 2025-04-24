console.log('ex1-1=============================');
const isStringNumber = (value: unknown): value is [string, number] => 
    Array.isArray(value) && // array.length >= 2 인넣는 이유: 1) string만의 가능성 2) 이미 array 체크로 몇개인지 체크함, 즉 이중체크
    typeof value[0] === 'string' && value[1] === 'number';
    // typeof value === 'string' || value === 'number';
    // typeof value[0] === 'string'; -> undefined, type 정의 내지 체크가 우선임

const f1 = (value: number | string | boolean | [string, number]) => {
    if (isStringNumber(value)) {
        console.log(value[0].toUpperCase(), value[1].toFixed());
    }
};
f1(['item', 1000]);  

console.log('ex1-2=============================');
interface Animal {}
interface Dog extends Animal {
    name: string;
}
interface Cat extends Animal {
    punch(): void;
}
class Retriever implements Dog {
    constructor(public name: string) {}
}

function isDog(a: Animal): a is Dog {
	return 'name' in a && typeof a.name === 'string';
    // 순서 바꾸면 안됨 -> undefined error
    // return a instanceof Retriever; -> class > function이라 안됨.
}
const maxx: Dog = {name:'Maxx'}; 
if(isDog(maxx)) console.log(maxx.name, 'isDog');
const gunhee = new Retriever('Gunhee');
if(isDog(gunhee)) console.log(gunhee.name, 'isDog');

console.log('ex2-1=============================');
const cart = {
    X: 1,
    Y: 2,
    Z: 3,
};

type T1 = "X" | "Y" | "Z";
type T2 = keyof typeof cart;

console.log('ex2-2=============================');
const constCart = {
    X: 1,
    Y: 2,
    Z: 3,
} as const; // 안전성(조작 불가하게)을 위해 반드시 붙여야함

// 얘네 왜 마우스 대보면 2 | 1 | 3으로 뜨냐; -> hash라 교환법칙 성립, 대보면 그때그때 달라짐
// 순서는 둘째치고, as const 없음 number를 가지게되는데,
// key에 대한 array를 뽑고
// 그다음에 그거에 대한 typeof를 뽑아내니, 그게 숫자 부분에 대한 거라서인가?
// 이와중에 as const없음 숫자인 이유가, readable이 아닌, type 그 자체를 뽑아와서?
type T3 = 1 | 2 | 3;
// type T4 = typeof constCart[keyof typeof constCart]; // [] : key
type ConstCart = typeof constCart;
type T4 = ConstCart[keyof ConstCart];

console.log('ex3===============================');

// const toErrorWithMesseage

try {
    // throw new Error('some error!!!!');   // 가
    // throw 'some string error!!!';        // 나
    throw ['some', 'array', 'error'];       // 다
}
catch (error) {
    console.log((error as Error).message); // (라)
}
