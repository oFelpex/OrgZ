import { Box, Tab, Tabs, useMediaQuery } from "@mui/material";
import { TodoColumn } from "./components/TodoColumn";
import { useState, type SyntheticEvent } from "react";

const mockData = {
  todo: ["Estudar React", "Fazer exercícios"],
  inProgress: ["Aprendendo MUI"],
  done: ["Configurar projeto"],
};

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

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

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TodoBoard() {
  const responsivite: boolean = useMediaQuery("(min-width:800px)");

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
          <TodoColumn title="To Do" items={mockData.todo} />
          <TodoColumn title="In Progress" items={mockData.inProgress} />
          <TodoColumn title="Done" items={mockData.done} />
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
              <Tab label="To-Do" {...a11yProps(0)} />
              <Tab label="In Progress" {...a11yProps(1)} />
              <Tab label="Done" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <TodoColumn title="To Do" items={mockData.todo} />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <TodoColumn title="In Progress" items={mockData.inProgress} />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <TodoColumn title="Done" items={mockData.done} />
          </CustomTabPanel>
        </Box>
      );
  }
}
