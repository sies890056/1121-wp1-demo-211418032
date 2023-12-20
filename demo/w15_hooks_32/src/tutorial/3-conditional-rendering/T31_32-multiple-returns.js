import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const T31_32_MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const resp = await fetch(url);

        if (!resp.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }

        const data = await resp.json(); // 修正這裡的 jason() 拼寫錯誤
        setIsLoading(false);
        setIsError(false);
        setUser(data);

      } catch (error) {
        console.log(error);
      }
    }

    fetchUser();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <h2>There was an error...</h2>
  }

  const { name } = user;
  return (
    <>
      <h2>{name}</h2>
    </>
  );
};

export default T31_32_MultipleReturns;
