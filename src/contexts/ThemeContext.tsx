import {
  useState,
  useMemo,
  useEffect,
  useCallback,
  type ReactNode,
  type FC,
} from "react";
import {
  ThemeProvider as MuiThemeProvider,
  type Theme,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import lightTheme from "../themes/lightTheme";
import darkTheme from "../themes/darkTheme";
import { ColorModeContext } from "../hooks/useColorMode";

interface ThemeContextProviderProps {
  children: ReactNode;
}

export const ThemeContextProvider: FC<ThemeContextProviderProps> = ({
  children,
}) => {
  const [mode, setMode] = useState<"light" | "dark">(() => {
    const storedMode = localStorage.getItem("muiThemeMode");
    return storedMode === "dark" ? "dark" : "light";
  });

  const toggleColorMode = useCallback(() => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  }, []);

  useEffect(() => {
    localStorage.setItem("muiThemeMode", mode);
  }, [mode]);

  const theme: Theme = useMemo(
    () => (mode === "light" ? lightTheme : darkTheme),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={{ toggleColorMode, mode }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ColorModeContext.Provider>
  );
};
