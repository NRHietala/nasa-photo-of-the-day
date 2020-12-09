import React from 'react'

function Photo(props) {
  const { photo } = props;
  return (
    <div>
      <img src={photo} alt="Outer Space"/>
    </div>
  )
}

export default Photo
