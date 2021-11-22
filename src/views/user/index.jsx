import { useState, useEffect } from 'react'

function useCountDown() {
  const [countdown,setCountDown] = useState(30);
  useEffect(() => {
    let timer = null;
    timer = setTimeout(() => {
      let nCountdown = countdown - 1;
      if(nCountdown < 0) {
        return
      }
      setCountDown(nCountdown)
    },1000);
    return () => {
      console.log(1111111111)
      clearTimeout(timer)
    }
  },[countdown])
  return countdown;
}

function User() {
  const [count,setCount] = useState(0);
  useEffect(() => {
    console.log(111,count)
    return () => {
      console.log(2222);
    }
  },[count]);

  const countdown = useCountDown();

  return (
    <>
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
      <div>
        <button>点击开始倒计时</button>
        <div>倒计时：{countdown}</div>
      </div>
    </>
  )
}

export default User;