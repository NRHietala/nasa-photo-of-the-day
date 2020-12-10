import React from 'react'

function Footer(props) {

  const { copyright } = props;
  return (
    <div>
      <h4>Photo courtesy of {copyright}</h4>
    </div>
  )
}

export default Footer
