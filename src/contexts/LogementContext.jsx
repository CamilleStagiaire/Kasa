import React, { createContext, useState, useEffect } from 'react';

export const LogementContext = createContext();

export const LogementProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/logements.json')
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.log(error));
  }, []);

  return (
    <LogementContext.Provider value={{ data }}>
      {children}
    </LogementContext.Provider>
  );
};
