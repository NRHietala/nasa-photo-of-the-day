import React from 'react'
import Photo from './Photo';

function Gallery(props) {
  const { photo } = props;

  return (
    <div>
      <Photo photo={photo}/>
    </div>
  )
}

export default Gallery
