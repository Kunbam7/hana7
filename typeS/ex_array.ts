const SIZE = [
    {id: 'XS', price: 8000},
    {id: 'S', price: 10000},
    {id: 'M', price: 12000},
    {id: 'L', price: 14000},
    {id: 'XL', price: 15000},
] as const; 
// ] as const;  // 1. as const로 literal type으로 변경
// read only -> 'const' 라서.
// -> type t = 'abc'  === let s = 'abc' as const

// 2. tpye 개별설정
// type sizeKey = 'XS' | 'S' | 'M' | 'L' | 'XL';
// type S = {id: sizeKey, }[];
// const sizeOption = {id }
// 



const sizeOption  = {XS: 1, S: 5, M: 2, L: 2, XL: 4};
const totalPrice = SIZE.reduce((currPrice, size) =>
    currPrice + (sizeOption[size.id] * size.price), 0
);

const sizeOption1 = {XS: 1, S: 5, M: 2, L: 2, XL: 4};
const totalPrice1 = SIZE.reduce((currPrice, size) => currPrice + sizeOption1[size.id] * size.price, 0);

// const sizeOption2 = {XS: 1, S: 5, MM: 2, L: 2, XL: 4};
// const totalPrice2 = SIZE.reduce((currPrice, size) => currPrice + sizeOption2[size.id] * size.price, 0);
