console.log('=================ex1');
// 1
const d = new Date();

const time1 = d.getTime();
d.setDate(1);

console.log('d: ', d, (d.getTime() - time1) / 1000);

// 2
const rand = (s, e) => s + Math.floor((e - s + 1) * Math.random());
const today = new Date();
today.setMonth(today.getMonth() + 1);
today.setDate(0);
const endofDay = today.getDate();

const days = [];
do {
    const r = rand(1,endofDay);
    if(!days.includes(r))   days.push(r);
} while(days.length < 5);

// 중복이 있을수 있어, 상황에 따라서 좋지않음
// for(let i = 0; i < 5; i++) {
//     days.push(rand(1,endofDay));
// }
console.log('days: ', days);
const yyyy = today.getFullYear();
const mm = (today.getMonth() + 1).toString().padStart(2,0);
const rets = days
    .sort((a,b) => (a < b ? 1 : -1))
    .map(day => `${yyyy}-${mm}-${day.toString().padStart(2, 0)}`);
console.log(rets);

// 3
const today3 = new Date();
today3.setFullYear(today3.getFullYear() + 1);
console.log('today3: ', today3);
// 유사배열객체  => array, length가 있어서 뽑아내기가 가능
console.log('NextYear >> ', '일월화수목금토'[today3.getDay()]);

// 4
const today4 = new Date();
today4.setDate(today4.getDate() + 100 - 1);
console.log('today4: ', today4);
