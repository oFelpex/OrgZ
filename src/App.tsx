import "./App.css";

import Box from "@mui/material/Box";
import { NavBar } from "./components/NavBar/NavBar";

function App() {
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
      <NavBar />
    </Box>
  );
}

export default App;
