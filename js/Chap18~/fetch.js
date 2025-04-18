const sampleUrl = 'https://jsonplaceholder.typicode.com/users/1';
const myFetch = url => fetch(url).then(res => res.json());  // fetch, json 모두 promise
                                                            // then으로 res.json값을 받게됨

const res = myFetch(sampleUrl);
// console.log('res: ', res);
// res.then(console.log);

const myFetchAsync = async url => {
    const res = await fetch(url);
    const data = await res.json();
    console.log('data: ', data);
    return data;
};
// (async () => {   // 구버전에서는 await을 쓰기위해 async 필요
    const res2 = await myFetch(sampleUrl);
    // const res2 = myFetchAsync(sampleUrl);
    console.log('res2: ', res2);
// })();

// fetch(sampleUrl).then(res => {
//     console.log('res: ', res);
//     return res.json();
// })
// .then(data => console.log('data >> ', data));