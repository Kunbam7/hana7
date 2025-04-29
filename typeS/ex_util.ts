console.log("ex1================================");
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
    [k in keyof (T & U)]: k extends (keyof T & keyof U) ? T[k] | U[k] : (T & U)[k];
};
type CombineExclude<T, U, E extends keyof Combine<T, U>> = {
    // [k in keyof (T & U)]: k extends keyof T & keyof U ? T[k] | U[k] : (T & U)[k];
    // [d in keyof (T | U | E)]: d extends keyof E ? never : d;
    // delete key - > keyof needed
    // keyof (T | U) extends keyof D ? never : (T | U);
    // way 1
    //  [k in Exclude<keyof Combine<T, U>, E>]: (T & U)[k];
    // way 2
    [k in Exclude<keyof Combine<T, U>, E>]: Combine<T, U>[k];
};

type ICombineExclude  = CombineExclude<IUser, IDept, 'name' | 'dname'>;
// combine, never for last two things

let combineExclude: ICombineExclude = {
    id: 0,
    age: 33,
    captain: 'ccc',
};  

console.log("ex2================================");
function registUserObj({ name, age }: {name: string; age: number}) {
    const id = 100;
    return { id, name, age };
}

type RegistUserObj = Parameters<typeof registUserObj>[number];
const paramObj: RegistUserObj = { name: 'Hong', age: 32 };
const newUser2 = registUserObj(paramObj);
console.log('🚀  newUser2:', newUser2);

console.log("ex3================================");
// way2 from PT flie
const debounce = <T extends (...args: Parameters<T>) => ReturnType<T>>(cb: T, delay: number = 1) => {
    let timer: ReturnType<typeof setTimeout>;
    return (  ...args: Parameters<T>) => {
        if(timer) clearTimeout(timer);
        timer = setTimeout(cb, delay, ...args);
    };
};

// way1 from PT file
const throttle = <T extends any[]>(cb: (...args: T) => any, delay: number = 1) => {
    let timer: ReturnType<typeof setTimeout> | null;
    return (...args: T) => {
        if(timer) return;
        timer = setTimeout(() => {
            cb(...args);
            timer = null;
        }, delay);
    };
};

const debo = debounce((a:number, b: string) => console.log(a + 1, b), 1000);
for (let i = 10; i < 15; i++) debo(i, 'abc');   // 15, 'abc'

const thro = throttle((a:number) => console.log(a + 1), 1000);
for (let i = 10; i < 15; i++) thro(i);   // 11

console.log("ex4================================");
// extends 는 한번 거르는 용도 -> parameters가 와도 가능
function memoized <T extends (...args: Parameters<T>) => ReturnType<T>>(fn: T) {
    const cache: Record<string, any> = {};
    return function (...args: Parameters<T>) {
        const k = [...args].join();     // 범용성이 높음
        // const k = [...args].sort().join();
        return k in cache ? cache[k] : (cache[k] = fn(...args));
    };
}  

const memoizeAdd = memoized((a: number, b: number) => {
    return a + b;
});
console.log(memoizeAdd(1, 2));
console.log(memoizeAdd(3, 4));