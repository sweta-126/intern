import React from 'react'
import "./Card.css"

const Card = ({title,desc}) => {
  return (
    <div className='card'>
       <div className="c-title">{title}</div>
       <div className="c-desc">{desc}</div>
       <button className='btn1'>Read More</button>
    </div>
  )
}

export default Card