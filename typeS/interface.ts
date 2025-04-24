type Xid = {id: number};
type Xname = {name: string;} & Xid;
type Xage = {age: number} & Xid;
type X = Xname | Xage;
type Y = Xname & Xage;  // 교집합, intersection
type Z = string & number;

//*,+ 계산순과 동일
type P = Xid | (Xname & Xage);  // a + bc
type Q = Xid & (Xname | Xage);  // ab + ac

let xx: X = {id: 1, name: 'Hong'};
xx = {id: 2, age: 33};
let yy: Y = {id: 11, name: 'Hong', age: 33};

let pp: P = {id: 3};
let qq: Q = {id:4, name: 'Q'};

// type TT = {id: number; name?: string};
let tt: TT = {id: 1};

interface TT {
    readonly id: number;
    name?: string;
}

//--------------------------------
interface CallSignature {
    (input: string): number;  // call signa..
    count: 0; // cf. count: number
    greeting: (name: string) => void;
}

const typedCallSignature: CallSignature = (input) => input.length;

typedCallSignature.count = 0;
typedCallSignature.greeting = (name) => console.log(`Hi, ${name}`);


interface Novel {
    title: string;
}