import { useEffect, useState } from "react"

const Pokemon = () => {

    const [pokemon, setPokemon] = useState({
        name: "bulbasaur",
        sprites: {
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
            back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png"
        }
    })

    const [name, setName] = useState("")
    const [submitName, setSubmitName] = useState("bulbasaur")
    const [isFront, setIsFront] = useState(true)

    useEffect(() => {

        const fetchPokemon = async () => {
            const res = await fetch("https://pokeapi.co/api/v2/pokemon/" + submitName)

            // alert user if pokemon searched is NOT found
            if (!res.ok) {
                
                alert("Pokemon NOT found!")

            // if it is found, continue
            } else {

                const data = await res.json()
                
                setPokemon(data)
                setIsFront(true)
            }
        }
        fetchPokemon()
    }, [submitName])

    const handleSpriteClick = () => {
        setIsFront(!isFront)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setSubmitName(name)
    }

  return (
    <>
        <h2>Pokemon!</h2>

        {/* Display Pokemon Area */}
        <div>
            <h2>{pokemon.name}</h2>
            <img 
                src={isFront ? pokemon.sprites.front_default : pokemon.sprites.back_default}
                onClick={handleSpriteClick}
            />
        </div>

        {/* Search Form */}
        <form onSubmit={handleSubmit}>
            <div>
                <label>Search: </label>
                <input
                    value={name}
                    type= "text"
                    onChange={(event) => setName(event.target.value)}/>
            </div>
            <button>Submit</button>
        </form>
    </>
  )
}

export default Pokemon