import { createContext, useContext, useState } from "react";

const MultiLevelContext = createContext(null);

export const MultiLevelContextProvider = ({ children }) => {
  const [selectedVal, setSelectedVal] = useState("");

  return (
    <MultiLevelContext.Provider value={{ selectedVal, setSelectedVal }}>
      {children}
    </MultiLevelContext.Provider>
  );
};

export const useMultiLevelContext = () => {
  const context = useContext(MultiLevelContext);

  if (!context) {
    throw new Error(
      "useMultiLevelContext must be used within a MultiLevelContextProvider"
    );
  }

  return context;
};
