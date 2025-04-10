// this
globalThis.name = 'GlobalName';
this.name = 'ModuleName';

function f() {
    console.log('f.this: ', this.name);
}
f();

const af = () => {
    console.log('af.this: ', this.name, globalThis.name);
};
af();

const obj = {
    name: 'ObjName',
    bark() {     // good!(호출한 객체)
        console.log('bark=', this.name);    // object 본인
    },
    bark2: () => // bad!! this=전역(browser)/module(node)
        console.log('bark2=', this.name),   // 상위 스코프에 대한 this
};
obj.bark();  
obj.bark2();

// 
const expressFn = function(name) {
    // if, 'use strict' ?
    'use strict';    //this 막아버리기
    //  this 쓰는법1 -준 꼼수
    //  if(this?.name)
    this.name = name;
    console.log(new.target, this.name, name);
}

// arrow func
const arrowFn = (name) => {
    this.name = name;
    console.log(this, new.target, this.name, name);
}

//expressFn('expfn');
//strict에서 this 쓰는법2
expressFn.bind({})('expfn');
arrowFn('afn');

/*
class Dog {
    construction(nm) {
        console.log('nm: ', nm);
    }
}
const Maxx = new Dog('Maxx');
*/

const dfn = new expressFn('D');
console.log('dfn: ', Object.getPrototypeOf(dfn));

// const afn = new arrowFn('A'); //error

console.log('=================================exCode');
const Dog = function(name) {
    console.log(this, new.target, 
                this instanceof Dog);
    this.name = name;
    this.bark = function () {
        console.log('bark=', new.target, this.name, name);
    };
    this.bark2 = () =>
        console.log('bark2=', new.target, this.name, name);
}

const dog = Dog('Doggy');
const lucy = new Dog('Lucy');
// Dog.bark(); // ?
lucy.bark(); // ?
lucy.bark2(); // ?
console.log('dog type=', typeof dog); // ?
console.log('lucy type=', typeof lucy); // ?

const Cat = (name) => {
    console.log(this, new.target);
    this.name = name;
    this.bark = function () {
    console.log('bark=', new.target, this.name, name);
    };
    this.bark2 = () =>
        console.log('bark2=', new.target, this.name, name);  
        return this;
}

const cat = Cat('Coco');
// const cat = new Cat(''); // error!!
cat.bark(); // ?
cat.bark2(); // ?
//Cat.bark(); // ?
console.log('type=', typeof cat); // ? 

  // cf. arrow function's this (p.60)


// Think Together (기술면접 예시)
globalThis.name = 'Global Name';

const obj2 = {
    name : 'Obj Name',
    printName() {
        console.log(this.name);
    },
};

const printName = obj2.printName;
printName();