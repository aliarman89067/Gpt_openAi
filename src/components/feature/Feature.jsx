import React from 'react'
import './feature.css'
const Feature = ({ title, text }) => {
  return (
    <div className='gpt3__brand-feature'>
      <div className='gpt3__brand-feature-heading'>
        <div/>
        <h1>{title}</h1>
      </div>
      <div className='gpt3__brand-feature-info'>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Feature