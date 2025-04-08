const { id, name = 'Hong', addr = 'xx' } = { id: 1, name: undefined, addr: null };
console.log(name);

const arr = [1,2,[3,4],[5,6],{ax:7, ay:8}, {ax:9}];
const [,x,[,y],z,,{ax}] = arr;
console.log(x);