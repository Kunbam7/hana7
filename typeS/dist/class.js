"use strict";
class WithMethod {
    myMethod() { } // function object 등록
}
const isSame = new WithMethod().myMethod === new WithMethod().myMethod; // true (:prototype)
console.log('isSame? ', isSame); // 동일한 주소
//---------------------------------------
class WithProperty {
    myProperty; // Type 정의
}
// 둘다 undefined -> true
console.log(new WithProperty().myProperty === new WithProperty().myProperty); // true??? false!
const instance = new WithProperty();
instance.myProperty(); // OK? OK -> as function recogzie
class WithProperty2 {
    myProperty; // call signature
    constructor() {
        this.myProperty = () => {
            console.log('Hello, this is myProperty!');
        };
    }
}
const instance2 = new WithProperty2();
instance2.myProperty();
class Teacher {
    sayHello() {
        console.log('Take chances, make mistakes, get messy!');
    }
} // Teacher 클래스의 이름은 teacher 변수에 주석(타입정의)을 다는데 사용됨
let teacher;
// teacher 변수에는 Teacher 클래스의 자체 인스턴스처럼 Teacher 클래스에 할당할 수 있은 값만 할당해야함을 타입스크립트에 알려줌
teacher = new Teacher(); // OK
teacher.sayHello(); // OK
// teacher = 'Hello';       // Error : Type 'string' is not assignable to type 'Teacher'.
teacher = { sayHello: () => { } }; // Error
teacher = {
    sayHello() { }
}; // Is this OK?? (:구조적 타입 체킹 - 구조만 같으면 통과! Exact-matching은 freshness 체크 X)
class students {
    // name: tring | number;  // 초기화문제(initialize)
    name = 'aa';
    study(hours) {
        throw new Error("Method not implemented.");
    }
}
// class extends------------------------------
class Lesson {
    subject;
    constructor(subject) {
        this.subject = subject;
    }
}
class OnlineLesson extends Lesson {
    url;
    constructor(subject, url) {
        //　언제나 부모를 시작, 생략 불가 -> 부모왕의 연결고리
        super(subject);
        this.url = url;
        this.subject = '';
    }
}
//-------------------------------------------
class PastGrades {
    grades = [];
}
class LabeledPastGrades extends PastGrades {
    label; // 있으나 마나! ==> 부모와 동일구조
}
let subClass;
subClass = new LabeledPastGrades(); // OK
subClass = new PastGrades(); // OK  (: Structurally TypeChecking)
// LabeledPastGrades는 선택적 속성인 PastGrades만 추가하므로 하위 클래스 대신 기본 클래스의 인스턴스를 사용할 수 있음 
//-------------------------------------------
class Assignment {
    grade; // 기본 클래스에서 number | undefined로 선언
}
class GradedAssignment extends Assignment {
    grade; // boolean 등 부모타입이 아닌건 에러
    // 하위 클래스에서 grade를 필수(항상 존재하는) number 타입으로 선언
    constructor(grade) {
        super();
        this.grade = grade;
    }
}
//-------------------------------------------
/*
class Animal {
    // name: string;
    constructor(public name: string, public mouse: string = 'x') {     // 접근자가 있어, 위에서 선언필요없음
        // this.name = 'x';
        this.mouse = mouse;
    }
    Feed(food: string): this {
        this.mouse = food;
        console.log(food, 'feed to', this.name);
        return this;
    }

    print() {
        console.log('Animal name is ', this.name);
    }
}
class Dog extends Animal {
    print() {
        console.log('Dog name is', this.name);
    }
}
class Cat extends Animal {
    print() {
        console.log(this.constructor.name, 'Name is', this.name);
    }
}

console.log('-----------------------');
const maxx : Dog = new Dog('Mass');
const navee: Cat = new Cat('Navee');

let animal: Animal = maxx;
animal.Feed('banana').print();

animal = navee;
animal.Feed('fish');

//-------------------------------------------
// const isString = (value: unknown): value is string =>  typeof value === 'string';

// const f1 = (value: number | string | boolean | [string, number]) => {
//     if (isString(value)) {
//         console.log(value.toUpperCase());
//     }
// };
*/ 
