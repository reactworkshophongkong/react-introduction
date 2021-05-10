import React, { useState, useEffect } from 'react'
import axios from 'axios'


// https://jsonplaceholder.typicode.com/guide/

const DataFetching = () => {
  // state to save the api response
  const [post, setPost] = useState(null)

  // useEffect hook to trigger api call, after initial render, note the dependency array has no values, so the effect runs once
  useEffect(() => {
    const fetchPosts = async () => {
      // Fetch
      // main drawbacks more code needed for POST requests and sending body
      // fetch(url, { method: 'POST' , body: JSON.stringify() , headers: {'Content-Type': 'application/json' }}
      // does not call promise.reject if status code is 4xx

      try {
        // const data = await fetch('https://jsonplaceholder.typicode.com/posts/1')
        // const result = await data.json()

        // Axios
        // benefits easier to make POST request , note below is GET we will show POST example later
        // will call promise.reject if status code is a error status code i.e. 4xx, 500 etc
        // const result = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
        // setPost(result.data)
      } catch(error) {
        console.log(error)
      }
    }


    // fetchPosts()

    // promise instead of async await 
      axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(result => {
          setPost(result.data)
        })
        .catch(error => console.log(error))
  }, [])

  console.log(post)

  return (
    <div>
      {post && <h1>{post.title}</h1>}
      {post && <p>{post.body}</p>}
    </div>
  )
}

// Exercise write the class component version
// data fetching is done in the 
class DataFetchingClass extends React.Component {

  componentDidMount() {
    // data fetching should be done here
  }

}

export { DataFetching, DataFetchingClass }