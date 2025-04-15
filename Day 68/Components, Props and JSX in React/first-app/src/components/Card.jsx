import React from 'react'
import "./Card.css"

const Card = (props) => {
  return (
    <div className='card'style={{overflow: "hidden"}}>
      <img src="https://www.computersciencedegreehub.com/wp-content/uploads/2023/02/shutterstock_535124956-scaled.jpg" alt="" height={200} style={{border:  "2px solid black", objectFit: "cover"}}/>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      </div>
  )
}

export default Card
