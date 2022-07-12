import React from 'react'

function post({posts,loading}) {
  if(loading){
    return <h1>loading...</h1>
  }
  
    return (
      <div>
      <ul className="list-group mb-4">
        {posts.map(post=>(
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))}
      </ul>
      </div>
    )
  }

export default post;