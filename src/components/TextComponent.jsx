import { useEffect, useState } from "react"

const TextComponent = () => {

    const [text, setText] = useState("")

    const [displayText, setDisplayText] = useState("N/A")

    const handleSubmit = (event) => {

        event.preventDefault()

        setDisplayText(text)
        setText("")
    }

    useEffect(() => {
        
        console.log(`Current Display Text: ${displayText}`)

    }, [displayText])

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