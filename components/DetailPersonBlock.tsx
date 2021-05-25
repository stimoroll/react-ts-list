import React from 'react';
import config from '../config';

export default ({person, onClick}:DPersonProps) => {
  const image_full = person.img_full || config.image_full_placeholder;
  return (
    <div onClick={onClick} >
      <img src={image_full} />
      <p>{person.fullname}</p>
      <p>{person.email}</p> 
      <br />
      <p>{person.description}</p>
    </div>
  )  
}