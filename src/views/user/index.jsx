import { useState, useEffect } from 'react'

function User() {
  const [count,setCount] = useState(0);
  useEffect(() => {
    console.log(111,count)
    return () => {
      console.log(2222);
    }
  })

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}

export default User;