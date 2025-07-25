import { Box, useMediaQuery } from "@mui/material";
import type { SelectPageProps } from "../../components/shared/SideNavBar/SelectPageContent/menuItems";

import Calendar from "./calendar/CalendarBoard";
import Notes from "./notes/NotesBoard";
import { useMemo } from "react";
import TodoBoard from "./to-do/TodoBoard";
import type { JSX } from "@emotion/react/jsx-runtime";

export default function Home({ selectedSection }: SelectPageProps) {
  const isMobile: boolean = useMediaQuery("(min-width:600px)");

  const content: JSX.Element = useMemo(() => {
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
  }, [selectedSection]);

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 1,
        ml: isMobile ? "240px" : "0px",
        mt: isMobile ? "64px" : "110px",
        width: isMobile ? "calc(100vw - 240px)" : "100vw",
      }}
    >
      {content}
    </Box>
  );
}
