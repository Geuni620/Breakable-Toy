import React from "react";

// TOOD: 데이터 집어 넣어야 함.
export const SelectContext = React.createContext(undefined);

export const SelectProvider = ({children, value}) => {
  return (
    <SelectContext.Provider value={value}>{children}</SelectContext.Provider>
  );
};

export const useSelectContext = () => {
  const context = React.useContext(SelectContext);

  if (context === undefined) {
    throw new Error("useSelect must be used within a <Select />");
  }
  return context;
};
