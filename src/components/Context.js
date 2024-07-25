import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState("");
  const [items, setItems] = useState([]);

  const login = () => {
    setIsAuthenticated(true);
    setCurrentUser("Rohan");
  };
  const logout = () => {
    setIsAuthenticated(false);
    setCurrentUser("");
  };
  const addItems = (item) => {
    setItems([...items, item]);
  };
  const removeItem = (item) => {
    setItems(items.filter((i) => i !== item));
  };
  const clearList = (item) => {
    setItems([]);
  };

  return (
    <AppContext.Provider
      value={{
        isAuthenticated,
        currentUser,
        items,
        login,
        logout,
        addItems,
        removeItem,
        clearList,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
