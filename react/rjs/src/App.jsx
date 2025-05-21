import { useState, version } from 'react'
import './App.css'


/*
// react 안에 있는거? -> 메모리 영역함수의 일종
// memorization -> 한번 등록 후 재실행되도 초기화x, 주소의 포인팅 상태 유지
const StatePoo = {};
function useState_struc(initValue) {
  if(StatePool._x !== undefined)  StatePool._x =  initValue;
  
  const obj = {
    get x() {
      return StatePool._x;
    },
    setX(newValueOrFn) {
      if (typeof newValueOrFn === 'function')  StatePool._x = newValueOrFn(StatePool._x);
      else  StatePool_x = newValueOrFn;

      App();
    },
  };
  return [obj.x, obj.setX];
}
*/

// func(변수)에 {}치는 이유 : 객체화 해야해서
// 
function MyButton({onClick, className}) {
  return <button onClick = {onClick} >MyButton</button>
}

const hong = { name: 'Hong', hobbies: ['Bike', 'Tennis'] };

const AboutMe = ({ myinfo }) => {
  const { name, hobbies } = myinfo;
  return <>
      <div className='flex justify-center items-center mt-5'></div>
      <h1>{name}</h1>
      <ul style = {{listStyle: 'none'}}>
        {hobbies.map(hobby => (<li key = {hobby}>{hobby}</li>))}

      </ul>
    </>;
};

function App() {
  // const [count, setCount] = useState(0) // 상태? 브라우저가 재사용함, 초기화 안됨? useState function의 역활
  // let x = 100;
  // const str = `${x}`;
  // console.log('str: ', str);
  // const plusCount = () => {
  //   setCount((count) => count + 1);
  //   // console.log('x1: ', x, count);
  //   x = x + 1;
  //   // console.log('x2: ', x, count);
  // }
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // jsx -> js, html의 공존, js가 html을 return( html의 공간)
  return <>  
    <dev className='flex justify-center items-center mt-5 h-[500px]'>
      <h1 className='text-3xl font-bold'>Vite + React {version}</h1>
      <MyButton 
        onClick = {() => setIsLoggedIn(!isLoggedIn)} 
        // className={}  
      /> 
      {isLoggedIn ? <AboutMe myinfo={hong} /> :
        <h3>Login Form</h3>}
      {/* = {MyButton()} */}
    </dev>
    </>;
}

export default App
