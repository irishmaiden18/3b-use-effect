import { useEffect, useState } from "react"

const Timer = () => {

    const [seconds, setSeconds] = useState(0)
    
    //state variable to start and stop timer
    const [isRunning, setIsRunning] = useState(false)

    /*
        useEffect - 
        - useEffect is good for functions that we know need to run exactly one time when the component is initially rendered
        - when working with timers, useEffect will guaranteee that the timer will only ever be created once
        - if we do NOT put our setInterval in a useEffect, a setInterval will be created every single time the component re-renders (when our state changes), which will stack the timers and create truly ridiculous numbers
    */
    useEffect(() => {
        // makes the timer only run when our state variable isRunning is true
        if (isRunning) {

            // set the setInterval function to a variable we can reference later to stop the timer
            // set interval(callback function, interval (in milliseconds) - runs the callback function every time the interval passes
            // 1000ms -> 1s
            const intervalId = setInterval(() => {
                // console.log("Timer")

                // when passing a callback into a setState function, the parameter is equal to the current value of our state. this guarantees we are able to increment the current value to calculate the new current value 
                // it doens't work without the callback, you can't just say seconds + 1, it won't work. must use a call back with the current value explicityly stated and edited.
                setSeconds((currentSeconds) => currentSeconds + 1)
            }, 1000)

            // clearInterval - stops a timer given its id

            // the cleanup function runs before useEffect runs again - when a dependency changes and you are about to run the useEffect callback function again, run the cleanup function first from the previous render
            // use return otherwise we would clear the interval automatically
            return () => {
                console.log("CLEANUP FUNCTION")
                clearInterval(intervalId)
            }
        }
    // makes the useEffect happen when the state variable "isRunning" changes
    }, [isRunning])

  return (
    <>
        <h2>Timer: {seconds} seconds</h2>
        <button onClick={() => setIsRunning(!isRunning)}>   
            {isRunning ? "STOP" : "START"}
        </button>

    </>
  )
}

export default Timer