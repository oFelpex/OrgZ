import "./App.css";

import { useState } from "react";

import Box from "@mui/material/Box";

import SideNavBar from "./components/shared/SideNavBar/SideNavBar";
import Home from "./pages/home/Home";

function App() {
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
      <Home
        selectedSection={selectedSection}
        setSelectedSection={setSelectedSection}
      />
    </Box>
  );
}

export default App;
