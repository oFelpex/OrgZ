import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9", // azul mais claro
    },
    secondary: {
      main: "#f48fb1", // rosa mais claro
    },
    background: {
      default: "#121212", // preto bem escuro para o fundo
      paper: "#1e1e1e", // cinza escuro para cards, papéis...
    },
    text: {
      primary: "#e0e0e0", // branco quase total
      secondary: "#bdbdbd", // cinza claro - texto secundário
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

export default darkTheme;
