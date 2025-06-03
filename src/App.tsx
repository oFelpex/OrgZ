import "./App.css";

import useMediaQuery from "@mui/material/useMediaQuery";

import Box from "@mui/material/Box";

import SideNavBar from "./components/SideNavBar/SideNavBar";
function App() {
  const isMobile: boolean = useMediaQuery("(min-width:600px)");

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
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          ml: isMobile ? "240px" : "0px",
          width: { sm: `calc(100% - 240px)` },
          mt: isMobile ? "120px" : "60px",
        }}
      >
        conteúdo principal
      </Box>
    </Box>
  );
}

export default App;
