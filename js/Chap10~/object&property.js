const user = {
    '': 1,        
    ' ': 1,       // 'id': 1, '0y': 2 모두 OK!
    123: 1,       // user[123], user['123'] OK, but user.123 is SyntaxError!!
    12345n: 2,    // user[12345], user[12345n], user['12345'] OK, but user['12345n'] is undefined!
    true: 1,      // OK  user[true]  user.true
    id: 2,          
    [`name`]: 'Hong',  // But, `name`: 'Hong'은 SyntaxError: Unexpected template string!
    [Symbol()]: 'Hong',   // OK But, Symbol(): 'Hong'은 SyntaxError: Unexpected token ':'
    [`${new Date()}`]: 365,    // OK! 'Sun Jul …': 365
    'my-friends': ['Han', 'Kim'],
    getInfo: () => `${this.id}-${this.name}`,       // OK! But, this is not user!
    getInfo() { return `${this.id}-${this.name}`; }, // OK! getInfo의 최종 <f.o>
}
console.log('user : ', user, user.true);
const keys = Object.keys(user);
console.log('keys: ',keys, Reflect.ownKeys(user)); //숫자부터 출력 -> 처리가 더 빨리되서

const oth = user[123]; // 변수 부르기 -> .123은 불가능, 숫자, - 등은 변수로 인식하지 못함, 앵간함 []씌우고
                       // []은 리터럴?
console.log(oth);

console.log('=======================');

const a = {};
const b = {k: 1};
const c = {k: 2};
// a.b, a[{k : 1}]
a[b] = 77;  //a['object Object'] = 77
a[c] = 99;  //a['object Object'] = 99
console.log(a[b], a[c]); // ?

