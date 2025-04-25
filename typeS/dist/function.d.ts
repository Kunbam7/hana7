declare function add(a: number, b: number): number;
declare const add2: (a: number, b: number) => number;
declare const add3: (a: number, b: number) => number;
declare const introduce: (name: string, height?: number) => void;
declare const introduce2: (name: string, height: number | undefined) => void;
declare const introduce4: (name: string, height?: number) => void;
declare function factorial(n: number): number;
declare const aFactorial: (n: number) => number;
declare const saFactorial: (n: number) => number;
declare const arr3: number[];
declare function tfn(this: {
    id: number;
}, x: string): void;
declare function ntfn(this: void, x: string): void;
declare const a: number[];
interface someInterface {
    [key: string]: number;
}
type IS = {
    [key: string]: string | number;
    3: number;
};
type IS2 = {
    [key: number]: string | number;
    id: number;
    5: number;
};
declare let isobji1: IS;
declare let isobj2: IS2;
declare const greeting: (greet: "Hi" | "Hello", name: string, age: number) => readonly [string, number];
declare const gr1: readonly [string, number];
declare const tup: [string, number];
