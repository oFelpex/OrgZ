import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#fcfcfd",
    },
    secondary: {
      main: "#dc004e", // rosa padrão
    },
    background: {
      default: "#f0f2f5", // cinza claro para o fundo
      paper: "#ffffff", // branco para cards, papéis...
    },
    text: {
      primary: "#212121", // preto quase total
      secondary: "#757575", // cinza - texto secundário
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

export default lightTheme;
