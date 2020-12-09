import React from 'react'

function Footer(props) {

  const { copyright } = props;
  return (
    <div>
      <h3>Photo courtesy of {copyright}</h3>
      <h4>Nasa</h4>
    </div>
  )
}

export default Footer
