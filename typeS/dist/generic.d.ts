declare class Factory<T> {
    protected products: T[];
    constructor(product: T);
    create(product: T): void;
    getProducts(): T[];
}
type Syrup = {
    syrup: 'choco';
    price: 500;
} | {
    syrup: 'strawberry';
    price: 800;
};
type Topping = 'java' | 'cherry';
type Coffee = {
    menu: string;
    price: number;
};
declare class CoffeeFactory extends Factory<Coffee> {
    order<T>(menu: string, toppings: T[]): {
        additives: T[];
        menu: string;
        price: number;
    } | null;
}
declare const coffeeFactory: CoffeeFactory;
declare const myCoffee: {
    additives: (Syrup | Topping)[];
    menu: string;
    price: number;
} | null;
declare const myAdditionalPrice: number | undefined;
declare const yourCoffee: {
    additives: Syrup[];
    menu: string;
    price: number;
} | null;
declare const yourAdditionalPrice: number | undefined;
declare class BothLogger<OnInstance> {
    instanceLog(value: OnInstance): OnInstance;
    static A: number[];
    static staticLog<OnStatic>(value: OnStatic): OnStatic;
}
declare const logger: BothLogger<number[]>;
declare const value: number[];
declare const logger2: BothLogger<unknown>;
declare const value2: unknown;
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
type Except<T, U> = T extends U ? never : T;
type Ex0 = Except<IUser, IDept>;
type Ex1 = Except<keyof IUser, keyof IDept>;
type Ex2 = Except<keyof IDept, keyof IUser>;
type O<T> = Omit<T, 'id' | 'age'>;
type Odept = O<IDept>;
type P<T, K extends keyof T> = Pick<T, K>;
type Pdept = P<IDept, 'id' | 'age'>;
