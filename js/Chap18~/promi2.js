const promi = new Promise((resolve, reject) => {
  setTimeout(() => {
    const now = Date.now();
    if (now % 2 === 0) resolve(console.log('fulfill', now));
    else reject(new Error('어디로?'));
  }, 1000);
});

console.log(promi);

promi.then(
  succ => console.log('Resolve!', succ, promi),
  err => console.log('Reject!', err, promi))
  .then(() => 123)
  .then(x => console.log('x: ', x));


// 우선순위 임의로 낮추기
const x = 1;
let y;
Promise.resolve(x).then(ret => console.log('ret: ', ret));
console.log('login');
Promise.resolve(x).then(ret => console.log('ret: ', ret));

const log = x => Promise.resolve
set(prop, val) {
  log(prop) // => 비동기로 처리, 우선순위가 낮음
  this[prop] = val;
}