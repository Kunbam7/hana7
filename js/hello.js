//렉시컬(lexical) 스코프? 화제 -> 어떤 스코프를 언급, 건드리느냐
//                         -> 식별자 찾아가기라고도 설명가능

//전역 스코프
console.log('Hello, Test!')

const userName = 'Kun';

function printName(nm) {
    //함수 스코프
    console.log(1, nm);

    //const userName = 'Hanaro';
    if(true) {  //if없이 {}만 있어도 가능 -> 구역(블록) 지정
        //블록 스코프
        var userName = 'True';
        console.log(22, userName);
    }
    console.log(2, userName);
}
printName(userName);
console.log(3, userName);

// + 모듈 스코프라는것도 있음

console.log('-----------------', typeof userName);
 