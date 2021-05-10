import React, { useState, useEffect } from 'react'
import axios from 'axios'


// https://jsonplaceholder.typicode.com/guide/

const PostsAndComments = () => {
  // can have state with value "posts" or "comments" to control what to display posts or comments
  // const [view, setView] = useState('posts')
  // we can have some state to track which post we are viewing comments for
  // const [postId, setPostId] = useState(1)

  return (
    <div>
      {/* we should <Posts /> or <Comments /> */}
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
  // we should have a click handler that changes the view  state in PostsAndComments to comments when clicked, and set the postId


  return (
    <div>
      Posts
    </div>
  )
}

const Comments = props => {
  // set some state for the comments
  // const [posts, setPosts] = useState([])


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