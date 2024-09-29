'use Client';

import { createContext, useContext, useState } from "react";

export const Acabou = createContext({});

export default function AcabouProvider({ children }) {
  const [value, setValue] = useState("True");

  const toggleValue = () => {
    setValue((prevValue) => (prevValue === "False" ? "True" : "False"));
  };

  return (
    <Acabou.Provider value={{ value, toggleValue }}>
      {children}
    </Acabou.Provider>
  );
}

