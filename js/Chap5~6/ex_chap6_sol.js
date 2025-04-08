// id, name출력
console.log('==================ex1');
const user = {id : 1, name : 'Hong', addr : {city : 'Seoul'}};
const hong = {id : 1, name : 'Hong'};
const lee = {id : 2, name : 'Lee'};

//변수 3개가 생성됨. obj, id, name
function f1(obj) {
    //const { id : id, name : name} = obj;
    const{id, name} = obj;
    console.log(id, name);
}
// const {id : id} = user
// 2번 방법 추천, 변수 생성없이 바로 꺼내는방향 -> 메모리 덜씀
function f2({id, name}) {
    //const {id, name} = list;
    console.log(id, name);
}
f1(user)
f2(user)

// passwd 외 가져오기 -> 푼 방법과 동일
console.log('==================ex2');
const user2 = {id : 1, name : 'Hong', passwd : 'xxx', addr : 'Seoul'};
const {passwd, ...userInfo} = user2;
console.log(userInfo);

// 3개 id 각각 할당 -> 푼 방법과 동일
console.log('==================ex3');
const arr = [[{id : 1}], [{id : 2}, {id : 3}]];
const [[{id : id1}], [{id : id2}, {id : id3}]] = arr;
console.log(id1, id2, id3);

//함수 완성시키기
console.log('==================ex4');
const user4 = {name: 'Hong', passwd: 'xyz', addr: 'Seoul'};
function getUserValueExceptInitial(k) {
    //(가)가 중요파트, []는 k가 문자열을 받기때문 -> 문자열은 array형식으로 저장되니
    const {[k] : val} = user4;
    //char array -> 문자열 입력받으니까
    const [, ... result] = val;
    //join 뭔지 한번더 확인필요
    return result.join('');
}

console.log(getUserValueExceptInitial('name')); // 'ong'
console.log(getUserValueExceptInitial('passwd')); // 'yz'
console.log(getUserValueExceptInitial('addr')); // 'eoul'