import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const useUser = () => {
    return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (user) => {
      if (user) {
          setUser(user); // Set the logged-in user
      } else {
          throw new Error("Invalid username or password");
      }
  };

    const logout = () => {
        setUser(null); // Clear the logged-in user
    };

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};