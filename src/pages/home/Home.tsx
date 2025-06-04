import { Box, useMediaQuery } from "@mui/material";
import type { SelectPageProps } from "../../components/shared/SideNavBar/SelectPageContent/menuItems";

import Calendar from "./calendar/CalendarBoard";
import Notes from "./notes/NotesBoard";
import type { JSX } from "react";
import TodoBoard from "./to-do/TodoBoard";

export default function Home({ selectedSection }: SelectPageProps) {
  const isMobile: boolean = useMediaQuery("(min-width:600px)");

  function renderContent(): JSX.Element {
    switch (selectedSection) {
      case "To-Do":
        return <TodoBoard />;
      case "Notes":
        return <Notes />;
      case "Calendar":
        return <Calendar />;
      default:
        return <>Something goes wrong, and I don't know what haha</>;
    }
  }

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        ml: isMobile ? "240px" : "0px",
        mt: isMobile ? "64px" : "110px",
        height: "100vh",
        bgcolor: "red",
      }}
    >
      {renderContent()}
    </Box>
  );
}
