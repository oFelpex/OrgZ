import { useState, type SyntheticEvent } from "react";

import { Box, Tab, Tabs, useMediaQuery } from "@mui/material";

import { TodoColumn } from "./components/TodoColumn";
import { todoData } from "../../../data/todoData";
import type { TabPanelProps } from "../../../types/tabPanelProps";

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function addTabProps(index: string): { id: string; "aria-controls": string } {
  return {
    id: `column-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}

export default function TodoBoard() {
  const responsivite: boolean = useMediaQuery("(min-width:1024px)");

  const [value, setValue] = useState(0);

  const handleChange = (_event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  switch (!responsivite) {
    case false:
      return (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 1,
            minHeight: "80vh",
          }}
        >
          <TodoColumn title="To Do" items={todoData.todo} />
          <TodoColumn title="On Going" items={todoData.onGoing} />
          <TodoColumn title="Done" items={todoData.done} />
        </Box>
      );
    case true:
      return (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            minHeight: "80vh",
          }}
        >
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              centered
            >
              <Tab label="To-Do" {...addTabProps("todo")} />
              <Tab label="On Going" {...addTabProps("on-going")} />
              <Tab label="Done" {...addTabProps("done")} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <TodoColumn title="To Do" items={todoData.todo} />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <TodoColumn title="In Progress" items={todoData.onGoing} />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <TodoColumn title="Done" items={todoData.done} />
          </CustomTabPanel>
        </Box>
      );
  }
}
