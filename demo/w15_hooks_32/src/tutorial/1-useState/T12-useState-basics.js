import React, { useState } from 'react';

const T12_32_UseStateBasics = () => {
 // let title = 'random text';
  const [title,setTitle] = useState('random title');
  const handleClick = () => {
    //title = 'Hello World';
    setTitle('Hello World');
    console.log('title',title);
  }
  return(
  <>
  <h2>{title}</h2>
  <button type='button' className='btn' onClick={handleClick}>
    chang title
  </button>
  </>
  );
};

export default T12_32_UseStateBasics;
