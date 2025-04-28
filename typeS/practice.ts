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
    [k in keyof (T & U)]: k extends keyof T & keyof U ? T[k] | U[k] : (T & U)[k];
};
type CombineExclude<T, U, D> = {
    [k in keyof (T & U)]: k extends keyof T & keyof U ? T[k] | U[k] : (T & U)[k];
    // [d in keyof (T | U | D)]: d extends keyof D ? never : d;
    // delete key - > keyof needed
    keyof (T | U) extends keyof D ? never : (T | U);
};

type ICombineExclude  = CombineExclude<IUser, IDept, 'name' | 'dname'>;
// combine, never for last two things

let combineExclude: ICombineExclude = {
    id: 0,
    age: 33,
    captain: 'ccc',
};  
