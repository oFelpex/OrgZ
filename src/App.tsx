import "./App.css";

import Box from "@mui/material/Box";
import SideNavBar from "./components/SideNavBar/SideNavBar";

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
      <SideNavBar />
    </Box>
  );
}

export default App;
