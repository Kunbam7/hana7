// id, name출력
const user = {id : 1, name : 'Hong', addr : {city : 'Seoul'}};
const hong = {id : 1, name : 'Hong'};
const lee = {id : 2, name : 'Lee'};

function f1(list) {
    let test = list;
    //test. 중복, distructing 안씀 -> 감정 케이스
    console.log(test.id, test.name);
}

function f2(list) {
    const {id, name} = list;
    console.log(id, name);
}
f1(user)
f2(user)
// 두 결과값 모두 동일하게 1, Hong or 2, Lee
console.log('==================');

// passwd 외 가져오기, rest 연산자 사용?
const user2 = {id : 1, name : 'Hong', passwd : 'xxx', addr : 'Seoul'};
const {passwd, ...userInfo} = user2;
console.log(userInfo);
// {id : 1, name : 'Hong', addr: 'Seoul}
console.log('==================');

// 3개 id 각각 할당
const arr = [[{id : 1}], [{id : 2}, {id : 3}]];
const [[{id : id1}], [{id : id2}, {id : id3}]] = arr;
console.log(id1, id2, id3);
// 1 2 3
console.log('==================');

//함수 완성시키기
const user4 = {name: 'Hong', passwd: 'xyz', addr: 'Seoul'};
function getUserValueExceptInitial(k) {
    const {[k]:val} = user4;
    const [, ... result] = val;
    return result.join('');
}
console.log(getUserValueExceptInitial('name')); // 'ong'
console.log(getUserValueExceptInitial('passwd')); // 'yz'
console.log(getUserValueExceptInitial('addr')); // 'eoul'