/*
console.log('ex1=======================================');
interface IUser {
    id: number;
    age: number;
    name: string;
}
interface IDept {
    id: number;
    age: string;
    dname: string;
    captain: string;
}

type Combine<T, U> = {
    // sol
    [k in keyof (T & U)]: k extends keyof T & keyof U ? T[k] | U[k] : (T & U)[k];
    // way2
    // [k in keyof (T&U)]: k extends keyof T & keyof U ? T[k] | U[k] : (k extends keyof T ? T[k] : U[k]);

    // keyof T extends keyof U ? (keyof T) & (keyof U) : keyof (T & U); -> keyof 걍 key만 가져오는거
    // extneds -> === for type
    // (keyof T) & (keyof U)   -> and 
    // keyof (T & U)           -> or
    // ? (keyof T) & (keyof U) : keyof (T & U) 
};
type ICombined = Combine<IUser, IDept>;

let combineX: ICombined = {
    id: 0,
    age: 33,
    name: 'aaa',
    dname: 'bbb',
    captain: 'ccc'
}
let combineY: ICombined = {
    id: 0,
    age: '33세',
    name: 'aaa',
    dname: 'bbb',
    captain: 'ccc'
}  

console.log('ex2=======================================');
type FirstArgs<F> = F extends (a: infer first, ...arg: any) => any ? first : never;
//     {
//     [k in keyof F]: F[k] extends number ? k : never;
// };
type SecondArgs<F> = F extends (a: any, b: infer second, ...arg: any) => any ? second : never;
// { 
//     [k in keyof F]: F[k] extends string ? k : never;
// };
type Args<F> = F extends (...args: infer P) => any ? P[number] : never;
// {    
//     [k in keyof F]: F[k] extends string | number | boolean ? k : never;
// };

function add(a: number, b: string, c: boolean) { 
    return `${a} - ${b} + ${c}`;
}

type A = FirstArgs<typeof add>;  // number
type B = SecondArgs<typeof add>; // string
type C = Args<typeof add>;       // number | string | boolean

type AX = Args<typeof String.prototype.endsWith>;
     // ⇒ string | number | undefined
type AY = Args<typeof String.prototype.charAt>;
     // ⇒ number

let a: A = 0;
let b: B = 'abc';
let c: C = Math.random() > 0.5 ? 1 : 'abc';
console.log('🚀 abc:', a, b, c);
*/