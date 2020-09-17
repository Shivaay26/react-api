import React, { useState,useEffect } from 'react'
import axios from 'axios'

const Datafetching = () => {
    const [post, setpost] = useState({})
    const [id, setid] = useState(1)
    let inputid=1;
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>{setpost(res.data)})
        .catch(error=>{console.log(error)})
    }, [id])
    return (
        <div>
            <input type="text" onChange={e=>inputid=e.target.value}/>
            
            <h1>{post.title}</h1>
        </div>
    )
}

export default Datafetching
