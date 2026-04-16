import { useEffect, useState } from "react"

const TextComponent = () => {

    const [text, setText] = useState("")

    const [displayText, setDisplayText] = useState(null)

    const handleSubmit = (event) => {

        event.preventDefault()

        setDisplayText(text)
        setText("")
    }

    /*

    useEffect - the side effect hook
    - allows us to write code that runs when a component initially renders or when certain variables change

        useEffect(callbackFn () => {
    
        }, [dependencyArray])

    - the callback function is the function we want to run

    - the dependency array takes in any amount of variables.  whenever changes are made to those variables, the callback function will run (callbackFn is dependent on those variables)

    - useEffect will ALWAYS run the callback function when the componenet is first rendered

    - if the dependency array is EMPTY, the callback function will ONLY run when the component is first rendered (no variable for it to be dependent on and cause a change)

    - it's okay to have multiple useEffects in one component

    - each dependency array can act on different dependency arrays but only one dependency arrray per useEffect

    - dependency arrays can be any variable, state variables or part of state variables, like a particular part of an object
  */


    // useEffect(() => {
    //     console.log(`Initial Display Text: ${displayText}`)
    // },[])

    useEffect(() => {

        // if we don't want to run our function when the component initially renders, we can add conditional logic to our useEffect function to make it so only runs when a dependency is changed instead
        // our null check prevents the console.log() from running unless displayText changes
        // if displayText is not its initial value, which here is null
        if(displayText !== null) {
            console.log(`Current Display Text: ${displayText}`)
        }

        // DO NOT change the state of one of your dependency array variables inside its respective useEffect. will create unintended behavior (infinite loop/circular dependency)
        // setDisplayText(Math.random()) -- changes display text which causes useEffect to run because displayText is in our dependency array, which in turn causes the function to run again and again
    }, [displayText/*, text*/])

    // useEffect(() => {
    //     console.log(Math.random())
    // }, [text])

    return (
        <>
            <h2>Text Component</h2>
            <h3>Text: {displayText}</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Text: </label>
                    <input 
                        type="text" 
                        value={text} 
                        onChange={(event) => setText(event.target.value)}
                    />
                </div>
                <button>Submit</button>
            </form>
        </>
    )
}

export default TextComponent