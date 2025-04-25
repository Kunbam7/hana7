"use strict";
/*
console.log('ex1-1=============================');
const isStringNumber = (value: unknown): value is [string, number] =>
    typeof value === 'string' || value === 'number';

const f1 = (value: number | string | boolean | [string, number]) => {
    if (isStringNumber(value)) {
        console.log(value[0].toUpperCase(), value[1].toFixed());
    }
};

console.log('ex1-2=============================');
interface Animal {}
interface Dog extends Animal {
    name: string;
}
interface Cat extends Animal {
    punch(): void;
}
class Retriever implements Dog {}

function isDog(a: Animal): a is Dog {
    // <이 부분을 작성하시오>
}


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
} as const;

// 얘네 왜 마우스 대보면 2 | 1 | 3으로 뜨냐;
// 순서는 둘째치고, as const 없음 number를 가지게되는데,
// key에 대한 array를 뽑고
// 그다음에 그거에 대한 typeof를 뽑아내니, 그게 숫자 부분에 대한 거라서인가?
// 이와중에 as const없음 숫자인 이유가, readable이 아닌, type 그 자체를 뽑아와서?
type T3 = 1 | 2 | 3;
type T4 = typeof constCart[keyof typeof constCart];

console.log('ex3===============================');
try {
    // throw new Error('some error!!!!');   // 가
    // throw 'some string error!!!';        // 나
    throw ['some', 'array', 'error'];       // 다
}
catch (error) {
    console.log((error as Error).message); // (라)
}
*/ 
