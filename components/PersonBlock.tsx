import React from 'react';
import config from '../config';

export default ({person, onClick}:DPersonProps) => {
  const image_src = person.img_thumb || config.image_placeholder;
  return (
    <div className="peson_block" onClick={onClick} data-id={person.id}>
      <img src={image_src} />
      <div>
        <p>{person.fullname}</p>
        <span>{person.email}</span> 
      </div>
    </div>
  )
}