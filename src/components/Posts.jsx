// https://jsonplaceholder.typicode.com/posts

import { useEffect, useState } from "react"

const Posts = () => {

    // in React, use state variables to store API data so we can access it outside our fetch functions
    const [posts, setPosts] = useState([])

    /*
        - we use the useEffect hook to make API calls in React - by far the most common use for useEffect
        - with an empty dependency array [], we call fetch on our initial component render in order to retrieve the data
        - after receiving the data, we store it in a state variable that we can utilize to render our data
        - without useEffect, the API call would trigger whenever state changed (bad!)
    */
    useEffect (() => {

        // set up our async function
        const fetchPosts = async () => {
            
            // we want it to only run once, so we do our fetch inside our useEffect
            const res = await fetch("https://jsonplaceholder.typicode.com/posts")

            const data = await res.json()

            // set our state after retrieving dat
            setPosts(data)

            console.log(posts)
        }

        // call function in the useEffect
        fetchPosts()

    // because the dependency array is empty, it will ONLY run on INITIAL render
    }, [])

  return (
    <>
        <h2>Posts</h2>
        {posts.map((post) => (
            <div key={post.id}>
                <h3>
                    {post.id}. {post.title}
                </h3>
                <p>{post.body}</p>
            </div>
        ))}
    </>
  )
}

export default Posts