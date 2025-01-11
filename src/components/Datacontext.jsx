// DataContext.js
import React, { createContext, useState, useContext, useMemo } from 'react';

// Create a Context
const DataContext = createContext();

// Custom hook to use the DataContext
export const useData = () => {
  return useContext(DataContext);
};

// DataProvider component to wrap your app
export const DataProvider = ({ children }) => {
  const [cart, setCart] = useState([]);  // State to hold the shared data

  const values = useMemo(() => {
    return {cart,setCart}
  }, [cart] )

  return (
    <DataContext.Provider value={ values }>
      {children}
    </DataContext.Provider>
  );
}; 