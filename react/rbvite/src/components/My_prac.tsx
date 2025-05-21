/*
import Login from './Login';
import Profile from './Profile';
import Item from './Item';
import { memo, useCallback, useMemo, useReducer, useState, type RefObject } from 'react';
import { useSession } from '../contexts/session/SessionContext';
import ColorTitle from './ColorTitle';
import { useDebounce } from '../hooks/useTimer';

type Props = {
  logoutButtonRef: RefObject<HTMLButtonElement | null>;
};

// type Post = { id: number; title: string };
// const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts?userId=1';

// const MemoColorTitle = memo(ColorTitle, () => true);
const MemoColorTitle = memo(
  ColorTitle,
  (preProp, newProp) => preProp.color === newProp.color
);

export default function My({ logoutButtonRef }: Props) {
  const {
    session: { loginUser, cart },
  } = useSession();

  // 1)
  // const [isAdding, setAdding] = useState(false);
  // const toggleAdding = () => setAdding(!isAdding);

  // 2)
  // const [isAdding, toggleAdding] = useToggle();

  // 3)
  const [isAdding, toggleAdding] = useReducer(pre => !pre, false);

  // observer
  const totalPrice = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.price, 0);
  }, [cart]);

  const [totalExpectPrice, addExpectPrice] = useReducer(
    (prePrice, newPrice) => totalPrice + newPrice + prePrice * 0,
    totalPrice
  );

  // const [posts, setPosts] = useState<Post[]>([]);
  // const [error, setError] = useState(null);
  // useEffect(() => {
  //   // (async function () {
  //   //   const res = await fetch(POSTS_URL);
  //   //   const data = await res.json();
  //   // })();
  //   const controller = new AbortController();
  //   const { signal } = controller;
  //   fetch(POSTS_URL, { signal })
  //     .then(res => res.json())
  //     .then(setPosts)
  //     .catch(err => {
  //       console.log('🚀 err:', err);
  //       if (!signal.aborted) setError(err);
  //     });

  //   return () => controller.abort();
  // }, []);

const [searchStr, setSearchStr] = useState('');
const [quary, setQuary] = useState('');

const search = useCallback(() => setQuary(searchStr), []);
useDebounce(() => setQuary(searchStr), 1000, [searchStr]);

/* shibal
const useState
const search = (pName: string) => {};
const searching = filter

// 검색엔진? 일단 cart.name이랑 비교하는게 필요 -> 그럼 이거 sessioncontext에서 불러와야하나? 
// if 비교? -> filter나 맵 있잖어 -> 해당되는 것만 보이게
// 타이핑 칠 수 있는 것도 필요하긋네 아마 요거
// <div>
// search:
// <input type='text' ref={nameRef} />
// </div>
*/

 