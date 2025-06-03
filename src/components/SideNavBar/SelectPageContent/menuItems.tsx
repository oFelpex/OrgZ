import type { ReactElement } from "react";

import type { SvgIconProps } from "@mui/material";

import NotesIcon from "@mui/icons-material/Notes";
import ListAltIcon from "@mui/icons-material/ListAlt";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

export type Items = {
  title: string;
  subTitle?: string;
  icon?: ReactElement<SvgIconProps>;
  value: string;
};
export const menuItems: Items[] = [
  {
    title: "Organize",
    value: "",
  },
  {
    title: "To-Do",
    subTitle: "Show your to-do list",
    icon: <ListAltIcon />,
    value: "To-Do",
  },
  {
    title: "Notes",
    subTitle: "Show all your notes",
    icon: <NotesIcon />,
    value: "Notes",
  },
  {
    title: "Overview",
    value: "",
  },
  {
    title: "Calendar",
    subTitle: "Show Calendar",
    icon: <CalendarMonthIcon />,
    value: "Calendar",
  },
];
