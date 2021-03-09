import React from 'react'
import '../../../style/src/post-list.css'
import PostListItem from '@ui/post-list-item'

const PostList = () => {
  return (
    <ul className="app-list list-group">
      <PostListItem />
      <PostListItem />
      <PostListItem />
    </ul>
  )
}

export default PostList