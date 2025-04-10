console.log('====================ex1');
const dog = {
    name : 'Maxx',
    showMyName() {
        // this. -> dog. this.은 global 호출 -> undefined
        // 일단 함수부분 다시 보고 정리 필요. 뭔가 꼬이고있다;
        console.log(`My name is ${dog.name}.`);
    },
    whatsYourName() {
        // 여기서 this는 showMyName 호출
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