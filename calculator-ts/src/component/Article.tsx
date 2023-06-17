import React from 'react'
import data from '../../data.json'

const Article: React.FC =() => {
  

  return (
    <>
    <div>
      <h3>Movie title</h3>
        <p>{data.title}</p>

      <h3>Author of the movie:</h3>
      <p>{data.author}</p>

      <h3>Release date:</h3>
      <p>{data.date}</p>


    </div>
    </>
  )
  }

export default Article;