import React from 'react'

function Details(props) {
  const { explanation, hdPhoto } = props;


  return (
    <div>
      <p>{explanation}</p>
       {/* add button functionality */}
      <button src={hdPhoto}>Click Here for High Definition Version</button>
    </div>
  )
}

export default Details
