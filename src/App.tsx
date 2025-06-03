import "./App.css";

import { useState } from "react";

import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";

import SideNavBar from "./components/SideNavBar/SideNavBar";

function App() {
  const isMobile: boolean = useMediaQuery("(min-width:600px)");
  const [selectedSection, setSelectedSection] = useState<
    "To-Do" | "Notes" | "Calendar"
  >("To-Do");
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
      <SideNavBar
        setSelectedSection={setSelectedSection}
        selectedSection={selectedSection}
      />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          ml: isMobile ? "240px" : "0px",
          width: { sm: `calc(100% - 240px)` },
          mt: isMobile ? "60px" : "110px",
        }}
      >
        conteúdo principal {selectedSection}
      </Box>
    </Box>
  );
}

export default App;
