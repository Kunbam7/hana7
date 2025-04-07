// id, name출력
const user = {id : 1, name : 'Hong', addr : {city : 'Seoul'}};
const hong = {id : 1, name : 'Hong'};
const lee = {id : 2, name : 'Lee'};

function f1() {

}
function f2() {

}
f1(hong)
f2(hong)
// 두 결과값 모두 동일하게 1, Hong or 2, Lee

console.log('==================');

// passwd 외 가져오기, rest 연산자 사용?
const user2 = {id : 1, name : 'Hong', passwd : 'xxx', addr : 'Seoul'};
const userInfo = {...user2};
console.log(userInfo);
// {id : 1, name : 'Hong', addr: 'Seoul}

console.log('==================');

// 3개 id 각각 할당
const arr = [[{id : 1}], [{id : 2}, {id : 3}]];

let id1, id2, id3;  //임시조치


console.log(id1, id2, id3);
// 1 2 3