import React from "react"

const Title = ({ title }) => {
  return <div className='section-title'>
    <h2>{title || '<CODE/>'}</h2>
    <div className='underline'/>
  </div>
}

export default Title
