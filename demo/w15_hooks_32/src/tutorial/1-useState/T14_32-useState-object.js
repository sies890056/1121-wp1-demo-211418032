import React, { useState } from 'react';

const T14_32_UseStateObject = () => {
  const [person,setPerson] = useState ({
    name:'kaixue',
    id:211418032,
    message:'happy day'
  });

  const ChangeMessage = () =>{
    setPerson({...person,message:'tired day'});
  }
  return(
    <>
     <h3>{person.name}</h3>
     <h3>{person.id}</h3>
     <h4>{person.message}</h4>
     <button className='btn' onClick={ChangeMessage}>Change Message</button>
    </>
    )
};

export default T14_32_UseStateObject;
