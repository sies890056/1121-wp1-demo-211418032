import React, { useEffect } from 'react';
import { useBlogContext } from '../BlogContxet_32';

const Alert_32 = ({ msg, type, removeAlert }) => {
  const {alert,showAlert} = useBlogContext ();
  useEffect(() => {
    const timeout = setTimeout(() => {
      showAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  });

  return <p className={`alert alert-${alert.type}`}> {alert.msg} </p>;
};

export default Alert_32;
