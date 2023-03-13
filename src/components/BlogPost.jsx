import React from 'react'

function BlogPost(props) {
  return (
    <div className="wholePost" >
    <div ><h3 className="date">{props.bloggerpost.date}</h3></div>
    <div ><h2 className="title">{props.bloggerpost.title}</h2></div>
    <div className="art">
        <img src={props.bloggerpost.art} className='photo'/>
    </div>

    <div className='blogText'>
    <div ><h1 className='bigLetter'>{props.bloggerpost.letter}</h1></div>
    <div ><h4 className="blurb">{props.bloggerpost.blurb}</h4></div>
    </div>
    <div><h2 className="link">{props.bloggerpost.link}</h2></div>
    <hr></hr>





    </div>
  )
}

export default BlogPost