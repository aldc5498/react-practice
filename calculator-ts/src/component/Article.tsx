import React from 'react'
import data from '../../data.json'

const Article: React.FC =() => {
  

  return (
    <>
    <div>
        <h1>{data.title}</h1>
    </div>
    </>
  )
  }

export default Article;