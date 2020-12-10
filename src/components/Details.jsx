import React from 'react';
import styled from 'styled-components';

function Details(props) {
  const { explanation, hdPhoto } = props;

  const Details = styled.div ` 
    display:flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content:space-between;
    

    p {
      width: 75%;
      line-height: 1.4;
      font-weight: 400;
      background: #212121;
      padding: 10px;
      border: 2px solid black;
      margin-bottom: 10px;
      text-align:center;
    }

    .btn {
      padding: 7px;
      margin: 10px;
      color:black;
      background:gold;
      border:none;
      border-radius: 15px;
    }



  `
  return (
    <Details>
      <p>{explanation}</p>
       {/* add button functionality */}
      <button className='btn' src={hdPhoto}>Click Here for High Definition Version</button>
    </Details>
  )
}

export default Details
