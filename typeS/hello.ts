type S = string;                // alias
const myName: S = 'Kun';    // annotated type
// let age: unknown = undefined;   // or any
let age: number;
age = 3;

let lastName: S | boolean = 'Heo';  // | : union
lastName = true;

console.log(`hello ${myName}`);

type Name = 'Hong' | 'Kim' | 'Lee'; // literal type
type someType = {
    id: number | string;
    name: Name;
    age: number;
    address: string;
}

const something = ({ id, name, age, address } : someType) => {
    console.log(id,name,age,address);
} 

// const user = {id: '1', name: 'Hong', age: 33, address: 'Soeul'};    // freshness; 생으로 만들어짐 
                                                                       //              -> 함수와는 독립적으로 생각됨
const user: someType = {id: '1', name: 'Hong', age: 33, address: 'Soeul'};  // freshness 끄는법1: 구조맞추기
something(user);

let x: string | undefined = 'str';  // value의 중요성(명확성 등))
let y: string | number;
y = x;

let z: string;
if(x) z = x;     // undefined가 아닌, if구문으로 string으로 줄여짐, if가 type guard


type Member = {
    name: string,
    addr: string,
    discountRate: number;
};
type Guest = {  // 2개의 property가 모두 통과해야 하나의 type으로 인정
    name: string,
    age: number,
};

type Customer = Member | Guest;
type MemberGuest = Member | Guest;

let m: Member;
let g: Guest;
let mg: MemberGuest;
let cust: Customer;

cust = {
    name: '홍길동',
    addr: '용산구',
    discountRate: 0.1,
};
m = cust;
// g = cst;   // type Memebr pass, Guest cannot
mg = cust;

cust = {
    name: '홍길동',
    addr: '용산구',
    discountRate: 0.1,
    age: 26,
}
// m = cust;
// g = cust;    // both cannot pass, 두 type 모두 인정 못받음
mg = cust;

let arr: number[];
let xarr = ['a'];
// if(Array.isArray(xarr))  arr = xarr;