import React, { useEffect } from 'react';

const Alert_32 = ({ msg, type, removeAlert }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert(); // Remove the alert after 3 seconds
    }, 3000);

    return () => clearTimeout(timeout); // Clear the timeout on unmount
  }, [removeAlert]);

  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert_32;
