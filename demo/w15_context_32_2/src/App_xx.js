import React, { useState, useEffect, useContext } from 'react';
import data from './blogData_xx';

//import Alert_32 from './components/Alert_xx';
//import BlogList_32 from './components/BlogList_32';
import { useBlogContext } from './BlogContxet_32';


const App_32 = () => {
  const {alert,clearBlogs} = useBlogContext ();
  return (
      <section className='blogs'>
        {alert.show && <Alert_32/>}
        <div className='section-title'>
          <h2>CSS Grid using breakpoints</h2>
        </div>
        <div className='blogs-center'>
          <BlogList_32 />
        </div>
        <button className='clear-btn' onClick={clearBlogs}>
          clear all blogs
        </button>
      </section>
  );
};

export default App_32;
