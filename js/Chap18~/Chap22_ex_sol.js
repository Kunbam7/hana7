const URL = 'https://jsonplaceholder.typicode.com';

const jpfetch = url => fetch(url).then(res => res.json());
const getUserInfo = userId => jpfetch(`${URL}/users/${userId}`);
const getPostInfo = userId => jpfetch(`${URL}/posts?userId=${userId}`);

const getUserPosts = async userId => {
    const {id, name} = await getUserInfo(userId);
    console.log('userInfo: ', id, name);
    const posts = await getPostInfo(userId);
    console.log('posts; ', posts);
};

try {
    console.log(await getUserPosts(1));
}
catch (err) {
    console.error('Error', err);
}
