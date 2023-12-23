import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App_32 from './App_xx';
import {BlogContextProvider_32} from './BlogContxet_32';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BlogContextProvider_32>
    <App_32 />
    </BlogContextProvider_32>
  </React.StrictMode>
);
