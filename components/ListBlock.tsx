import React from 'react';
import PersonBlock from './PersonBlock';

export default ({persons, onClick}:DListProps) => { 
  const listItemClickHandler = (e) => {
    console.log("ttsdfsdft");
  }
  return persons.map(
    (person:IPerson) => <PersonBlock 
      person={person} 
      key={person.id} 
      onClick={onClick}
    />
  )  
}