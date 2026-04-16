// https://jsonplaceholder.typicode.com/posts

import { useEffect, useState } from "react"

const SinglePost = () => {

    const [post, setPost] = useState({
        id: 0,
        title: "N/A",
        body: ""
    })

    // getting the input ID
    const [id, setId] = useState(1)
    
    // ID for the API call (changes when we submit)
    const [submitId, setSubmitId] = useState(1)

    useEffect(() => {
    const fetchPost = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + submitId)
        const data = await res.json();
        setPost(data);
    };
    fetchPost()
  }, [submitId]);

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitId(id)
  } 

    return (
        <>
            {/* <h2>POST INFO</h2> */}

            {/* Post info display */}
            <div>
                <h1>{post.id}. Title: {post.title}</h1>
                <p>Body: {post.body}</p>
            </div>

            {/* Input form */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Select an ID: </label>
                    <input 
                        value={id} 
                        type="number" 
                        onChange={(event) => setId(event.target.value)}
                        min={1}
                        max={100}
                    />
                </div>
                <button>Submit</button>
            </form>
        </>
    )
}

export default SinglePost