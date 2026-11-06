import React, { useState, useEffect} from 'react'
import axios from "axios"

const Feed = () => {


    const [posts, setPosts] = useState([
        {
            _id: "1",
            image: "https://plus.unsplash.com/premium_photo-1793030405985-f26695241e8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
            caption: "My first page",
        },
    ])

    useEffect(() => {

        axios.get("http://localhost:3000/posts")
        .then((res) => {
           setPosts(res.data.posts)
        })
    }, [])

    return (
        <section className='feed-section'>
            {
                posts.length > 0 ? (
                    posts.map((post) => (
                        <div key={post._id}
                            className='post-card'>
                            <img src={post.image} alt=
                                {post.caption} />
                            <p> {post.caption}</p> </div>
                    ))
                    ) : (
                    <h1> No Posts available </h1>
                )
            }

        </section>
    )
}

export default Feed
