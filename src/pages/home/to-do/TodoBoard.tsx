import { Box } from "@mui/material";
import { TodoColumn } from "./components/TodoColumn";

const mockData = {
  todo: ["Estudar React", "Fazer exercícios"],
  inProgress: ["Aprendendo MUI"],
  done: ["Configurar projeto"],
};

export default function TodoBoard() {
  return (
    <Box
      sx={{ display: "flex", gap: 2, px: 2, minHeight: "80vh", width: "72vw" }}
    >
      <TodoColumn title="To Do" items={mockData.todo} />
      <TodoColumn title="In Progress" items={mockData.inProgress} />
      <TodoColumn title="Done" items={mockData.done} />
    </Box>
  );
}
