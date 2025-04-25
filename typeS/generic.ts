export class Factory<T> {
    protected products: T[];

    constructor(product: T) {
        this.products = [product];
    }

    create(product: T) {
        this.products.push(product);
    }
    getProducts() {
        return [...this.products];
    }
}


type Syrup =
    | { syrup: 'choco', price: 500 }
    | { syrup: 'strawberry', price: 800 };
type Topping = 'java' | 'cherry';
type Coffee = { menu: string, price: number };

class CoffeeFactory extends Factory<Coffee> {
    order<T>(menu: string, toppings: T[]) {  //독립적 T
        const coffee = this.products.find(
            ({ menu: _coffee }) => _coffee === menu
        );

        return coffee ? 
                { ...coffee, additives: toppings } 
                : null;
    }
}

const coffeeFactory = new CoffeeFactory({
    menu: 'americano',
    price: 2000
});

const myCoffee = coffeeFactory.order<Syrup | Topping>('americano', [
    { syrup: 'choco', price: 500 },
    'java',
    'cherry'
]);

//---------------------------

const myAdditionalPrice = myCoffee?.additives.reduce(
    (sum, item) => sum += (typeof item === 'string' ? 0: item.price), 0 ); // OK? Error?

const yourCoffee = coffeeFactory.order<Syrup>('americano', [
    { syrup: 'choco', price: 500 },
    { syrup: 'strawberry', price: 800 }
]);
const yourAdditionalPrice = yourCoffee?.additives.reduce((s, c) =>
    s += c.price, 0); // OK? Error? OK!


class BothLogger<OnInstance> {
    instanceLog(value: OnInstance) {
        console.log('instanceLog.value > ', value);
        return value;
    }

    static A: number[];   // new 
    static staticLog<OnStatic>(value: OnStatic) {   // 함수에는 generic 이용 가능
        let instanceLogValue: number[];

        console.log('staticLog.value > ', value);
        return value;
    }
}

const logger = new BothLogger<number[]>();
const value = logger.instanceLog([1, 2, 3]); // number[]
// logger.instanceLog(['A', 'B', 'C']); // arguments must be number[]

const logger2 = new BothLogger();
const value2 = logger2.instanceLog('Hello'); // unknown

BothLogger.staticLog<string[]>(['a', 'b', 'c']);
BothLogger.staticLog([true, false, false]);

//-------------------------

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
// 구조는 비교하지 않음
// 통과된걸 never(제외시킴)
type Except<T, U> = T extends U ? never : T;    // never는 씹힌다!(같으면 제외)
type Ex0 = Except<IUser, IDept>;    // IUser  
type Ex1 = Except<keyof IUser, keyof IDept>;    // name
type Ex2 = Except<keyof IDept, keyof IUser>;    // dname | captain

type O<T> = Omit<T, 'id' | 'age'>;
type Odept = O<IDept>; // ?

// cf. Pick  (<=> Intersect)
type P<T, K extends keyof T> = Pick<T, K>;
type Pdept = P<IDept, 'id' | 'age'>;
