import React from 'react'
import BlogPost from './BlogPost'

function Blog(props) {
  return (
    <div>
    <BlogPost bloggerpost={props.blogger.street}/>
    <BlogPost bloggerpost={props.blogger.vintage}/>
    </div>
  )
}

export default Blog