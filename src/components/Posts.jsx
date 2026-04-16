//https://jsonplaceholder.typicode.com/posts

import { useState } from "react"

const Posts = () => {

    // in React, use state variables to store API data so we can access it outside our fetch functions
    const [posts, setPosts] = useState([])

    // we want it to only run once, so we do our fetch inside our useEffect
    useEffect (() => {
        const fetchPosts = async () => {
            
            const res = await fetch("https://jsonplaceholder.typicode.com/posts")

            const data = await res.json()

            setPosts(data)

            console.log(posts)
        }
        fetchPosts()
    // because the dependency array is empty, it will ONLY run on INITIAL render
    }, [])

  return (
    <>
        <h2>Posts</h2>
    </>
  )
}

export default Posts