declare const isStringNumber: (value: unknown) => value is [string, number];
declare const f1: (value: number | string | boolean | [string, number]) => void;
interface Animal {
}
interface Dog extends Animal {
    name: string;
}
interface Cat extends Animal {
    punch(): void;
}
declare class Retriever implements Dog {
    name: string;
    constructor(name: string);
}
declare function isDog(a: Animal): a is Dog;
declare const maxx: Dog;
declare const gunhee: Retriever;
declare const cart: {
    X: number;
    Y: number;
    Z: number;
};
type T1 = "X" | "Y" | "Z";
type T2 = keyof typeof cart;
declare const constCart: {
    readonly X: 1;
    readonly Y: 2;
    readonly Z: 3;
};
type T3 = 1 | 2 | 3;
type ConstCart = typeof constCart;
type T4 = ConstCart[keyof ConstCart];
declare const xCart: {
    readonly x: 1;
    readonly y: "str";
};
type XCart = typeof xCart;
type Valueof<T> = T[keyof T];
type t44 = Valueof<typeof ConstCart>;
type t55 = Valueof<XCart>;
