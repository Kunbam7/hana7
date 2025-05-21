import { useRef } from 'react';
import './App.css';
import Hello, { type HelloHandler } from './components/Hello';
import My from './components/My.tsx';
import { useCounter } from './contexts/counter/useCounter';
import SessionProvider from './contexts/session/SessionProvider';
import Nav from './Nav.tsx';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home.tsx';
import Login from './components/Login.tsx';


function App() {
  // const [session, setSession] = useState<Session>(SampleSession);
  // const [count, setCount] = useState(0);
  const { count } = useCounter();
  // const { count } = useContext(CounterContext);
  // const { count } = use(CounterContext);
  // const x = 9;
  // if (x > 0) {
  //   const { count } = use(CounterContext);
  //   console.log('🚀 count:', count);
  // }

  const helloButtonRef = useRef<HTMLButtonElement>(null);
  const logoutButtonRef = useRef<HTMLButtonElement>(null);
  const helloHandlerRef = useRef<HelloHandler>(null);

  return (
    <>
      

      <SessionProvider>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/my' element={<My logoutButtonRef={logoutButtonRef} />} />
        </Routes>
        <My logoutButtonRef={logoutButtonRef} />
      </SessionProvider>

      <h2>count: {count}</h2>

      <Hello
        id={count + 1}
        helloButtonRef={helloButtonRef}
        refx={helloHandlerRef}
      >
        반갑습니다!
      </Hello>
      <button onClick={() => helloButtonRef.current?.click()}>
        Click Hello
      </button>
      <button onClick={() => logoutButtonRef.current?.click()}>
        Logout in App
      </button>

      <button onClick={() => console.log(helloHandlerRef.current?.xx)}>
        sayHello
      </button>
    </>
  );
}

export default App;