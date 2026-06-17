import { useState, createContext, useContext } from "react";

export const themeContext = createContext({
  theme: "light",
  setTheme: () => {},
});

export const themeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      {children}
    </themeContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(themeContext);
};