import React, { createContext, useState, useContext } from "react";

// Create the context
const UserContext = createContext();

// Custom hook for easier usage
export const useUser = () => useContext(UserContext);

// UserProvider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (username) => setUser(username); // Set the user
  const logout = () => setUser(null); // Clear the user

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};