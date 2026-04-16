import { useEffect, useState } from "react"

const Counter = () => {

    const [count, setCount] = useState(0)
    const [double, setDouble] = useState(0)

    useEffect(() => {
        setDouble(2 * count)
    }, [count])

  return (
    <>
    <h2>Counter</h2>
    <p>Count: {count}</p>
    <p>Double: {double}</p>
    <button onClick={() => setCount(count+1)}>Add One</button>
    </>
  )
}

export default Counter