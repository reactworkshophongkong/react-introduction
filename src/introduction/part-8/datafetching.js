import React, { useState, useEffect } from 'react'
import axios from 'axios'


// https://jsonplaceholder.typicode.com/guide/

const PostsAndComments = () => {
  // we can have some state to track which post we are viewing comments for
  // const [selectedPost, setSelectedPos] = useState(1)
  // selected post can be passed into Comments component

  return (
    <div>
      {/* can use a two column layout with Posts and Comments */}
    </div>
  )
}

const Posts = () => {
  // set some state for the posts
  // const [posts, setPosts] = useState([])

  //  in useEffect hook
  // https://jsonplaceholder.typicode.com/posts
  // should fetch the posts and save in state

  // we create a section for each Post from the results
  // we should display post.body, post.title and a button to show comments
  // we should have a click handler that sets the selectedPost


  return (
    <div>
      Posts
    </div>
  )
}

const Comments = props => {
  // set some state for the comments
  // const [comments, setComments] = useState([])


  // in useEffect hook
  // https://jsonplaceholder.typicode.com/posts/:id/comments
  // should fetch the comments and save in state, the id will come from props
  // lets render the name and body for each comment
  
  return (
    <div>
      Comments
    </div>
  )
}

export { PostsAndComments }