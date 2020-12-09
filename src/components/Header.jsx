import React from 'react'

function Header(props) {
  const { title, date } = props;

  return (
    <div>
      <h1>{title}</h1>
      <h2>{date}</h2>
    </div>
  )
}

export default Header
