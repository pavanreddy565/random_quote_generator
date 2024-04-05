import React from 'react'

function Load() {
  return (
    <div className='load_lines'>
        <div className="line" style={{animationDelay:'100ms'}}></div>
        <div className="line" style={{animationDelay:'200ms'}}></div>
        <div className="line" style={{animationDelay:'300ms'}}></div>
        <div className="line" style={{animationDelay:'400ms'}}></div>
        <div className="line" style={{animationDelay:'500ms'}}></div>
    </div>
  )
}

export default Load;