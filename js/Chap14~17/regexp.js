const str = 'Senior Coding Learning JS';
const a = /[A-z\d]/.test(str); // true
console.log('a: ', a);
const b = /(A-z\d)/.test(str); // false, ()라서
console.log('b: ', b);
const c = /(A-z\d)/.test('XA-z2'); // ?
console.log('c: ', c);
const d = /(A-z\d)/.test('XAz2'); // ?
console.log('d: ', d);

const r1 = str.replace(/[A-Z]/g, '*');
//z-A는 안됨 -> 시작부터 끝이라. 역순안됨
console.log('r1: ', r1);

const str2 = 'Senior Coding';
// const regexp1 = /[A-Z]/;
// const regexp1 = new RegExp(/[A-Z]/);
const regexp1 = new RegExp('[A-Z]', 'g');
const r11 = regexp1.test(str2);
console.log('r11: ', r11);
const r12 = regexp1.test(str2);
console.log('r12: ', r12);
const r13 = regexp1.test(str2);
console.log('r13: ', r13);

console.log('==========================');
function xx(args) {
    console.log('xx: ', ...args);
}
const star = 'Senior Coding Learning JS'.replace(/[A-Z]/g, 
    (foundStr, position) => {
        if(foundStr === 'J') return 'X' + position;
        return foundStr.toLowerCase(); 
    }
);
console.log('start: ', star);