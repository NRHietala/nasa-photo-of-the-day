import React from 'react';
import styled from 'styled-components';

function Header(props) {
  const { title, date } = props;

  const Header = styled.div `
    display:flex;
    flex-flow: column nowrap;
    align-items: center;
    margin-top: 10px;
  
    h3 {
      padding: 20px;
    }

    h2 {
      color:gold;
      margin-top:15px;
      font-weight: 600;
      padding: 10px;
    }

  `

  return (
    <Header>
      <h1>Nasa's Astronomy Photo of the Day</h1>
      <h3>Date: {date}</h3>
      <h2>{title}</h2>
    </Header>
  )
}

export default Header
