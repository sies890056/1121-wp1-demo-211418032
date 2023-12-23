import React, { useState, useEffect, useContext, Children } from 'react';
import data from './blogData_xx';

import Alert_32 from './components/Alert_xx';
import BlogList_32 from './components/BlogList_32';

const BlogContext = React.createContext();

const BlogContextProvider_32 = ({ children }) => {
  const [blogs, setBlogs] = useState(data);
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: '',
  });

  const showAlert = (show = false, msg = '', type = '') => {
    setAlert({ show, msg, type });
  };

  console.log('blogs', blogs);

  const removeItem = (id) => {
    showAlert(true, 'blog removed', 'danger');
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  const clearBlogs = () => {
    showAlert(true, 'empty all blogs', 'danger');
    setBlogs([]);
  };

  return (
    <BlogContext.Provider value={{ blogs, alert, showAlert, removeItem, clearBlogs }}>
      {children}
    </BlogContext.Provider>
  );
};

const useBlogContext = () => {
  return useContext(BlogContext);
};

export { BlogContextProvider_32, useBlogContext };
