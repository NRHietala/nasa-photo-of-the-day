import React from 'react';
import styled from 'styled-components';
function Photo(props) {
  const { photo } = props;


  const Image = styled.img `
  border: 4px solid black;
  margin: auto;
  height: 60vh;
  `


  return (
    <div>
      <Image src={photo} alt="Outer Space"/>
    </div>
  )
}

export default Photo
