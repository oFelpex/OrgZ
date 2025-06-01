import { createContext, useContext } from "react";

interface ColorModeContextType {
  toggleColorMode: () => void;
  mode: "light" | "dark";
}

export const useColorMode = () => {
  const context = useContext(ColorModeContext);
  if (context === undefined) {
    throw new Error("useColorMode must be used within a ThemeContextProvider");
  }
  return context;
};

export const ColorModeContext = createContext<ColorModeContextType | undefined>(
  undefined
);
