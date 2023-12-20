import React from 'react';

const T11_32_ErrorExample = () => {
  let title = 'random text';

  const handleClick = () => {
    title = 'Hello World';
    console.log('title',title);
  }
  return(<>
  <h2>{title}</h2>
  <button type='button' className='btn' onClick={handleClick}>
    chang title
</button>
    </>
  );
};

export default T11_32_ErrorExample;
