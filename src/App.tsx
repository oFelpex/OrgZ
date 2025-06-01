import "./App.css";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useColorMode } from "./hooks/useColorMode";

function App() {
  const { toggleColorMode, mode } = useColorMode();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        bgcolor: "background.default",
        color: "text.primary",
      }}
    >
      <AppBar position="static">
        <Toolbar>
          <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
            {mode === "dark" ? <BedtimeIcon /> : <Brightness7Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default App;
