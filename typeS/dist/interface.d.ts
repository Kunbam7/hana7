type Xid = {
    id: number;
};
type Xname = {
    name: string;
} & Xid;
type Xage = {
    age: number;
} & Xid;
type X = Xname | Xage;
type Y = Xname & Xage;
type Z = string & number;
type Q = Xid & (Xname | Xage);
declare let xx: X;
declare let yy: Y;
declare let qq: Q;
declare let tt: TT;
interface TT {
    readonly id: number;
    name?: string;
}
interface CallSignature {
    (input: string): number;
    count: 0;
    greeting: (name: string) => void;
}
declare const typedCallSignature: CallSignature;
interface Novel {
    title: string;
}
