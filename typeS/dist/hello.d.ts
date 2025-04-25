type S = string;
declare const myName: S;
declare let age: number;
declare let lastName: S | boolean;
type Name = 'Hong' | 'Kim' | 'Lee';
type someType = {
    id: number | string;
    name: Name;
    age: number;
    address: string;
};
declare const something: ({ id, name, age, address }: someType) => void;
declare const user: someType;
declare let x: string | undefined;
declare let y: string | number;
declare let z: string;
type Member = {
    name: string;
    addr: string;
    discountRate: number;
};
type Guest = {
    name: string;
    age: number;
};
type Customer = Member | Guest;
type MemberGuest = Member | Guest;
declare let m: Member;
declare let g: Guest;
declare let mg: MemberGuest;
declare let cust: Customer;
declare let arr: number[];
declare let xarr: string[];
