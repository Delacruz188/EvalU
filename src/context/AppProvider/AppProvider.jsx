import React, { useState } from "react";
import { AppContext } from "../context";

export const AppProvider = ({ children }) => {
  const [description, setDescription] = useState({});

  const toggleDescription = (newDescription) => {
    setDescription({
      description: newDescription,
    });
  };

  return (
    <AppContext.Provider value={{ description, toggleDescription }}>
      {children}
    </AppContext.Provider>
  );
};
