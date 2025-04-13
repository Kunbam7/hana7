console.log('====================ex1');
const dog = {
    name : 'Maxx',
    showMyName() {
        // this. -> dog. this.은 global 호출 가능성 있음 -> undefined
        // 때문에 호출하는걸 분명히 하기위해 dog.으로 변경?
        // 일단 함수부분 다시 보고 정리 필요. 뭔가 꼬이고있다;
        console.log(`My name is ${dog.name}.`);
    },
    whatsYourName() {
        // 여기서 this는 showMyName 만을 호출? 
        // -> 때문에 const dog 전체가 아닌, showMyName만 해당 
        // -> this.이 global 호출로 에임이 변경됨?
        setTimeout(this.showMyName, 1000);
    },
};
dog.whatsYourName();

//test
globalThis.name = 'GlobalHello';
const obj1 = {
    name: 'Obj1',
    hello() {
        console.log('obj1: ', this.name);
    }
};
obj1.hello();

// const hello2 = obj1.hello;
// hello2();

console.log('====================ex2');
// 1
const fn = (x, y) =>  console.log(`금일 운행금지 차량은 끝번호 ${x}, ${y}입니다! `);

console.log(fn(1,6));
console.log(fn(1,6));
// 2



console.log('====================ex3');
const before = () => console.log('brefore...');
const after = () => console.log('after...');

const someFn = (name, greeting) => console.log(`${greeting}, ${name}`);
const someFn2 =(id, nickname, email, level) => console.log(`${id}/${nickname}/${email}/${level}`);

const template = (...args) => someFn;

const temp = template(someFn);
const temp2 = template(someFn2);

temp('sico', 'hello');
temp2(1, 'sico', 'sico@mail.com', 5);

console.log('====================ex4');
const weeks = ['일', '월', '화', '수', '목', '금', '토'];
let widx = -1;
const getNextWeek = () => {
    widx += 1;
    if(widx >= weeks.length)    widx = 0;
    return `${weeks[widx]}요일`;
};

let cnt = 0;
const intl = setInterval(() => {
    console.log('call', cnt, getNextWeek());
    if((cnt += 1) === 8)    clearInterval(intl);
}, 1000);