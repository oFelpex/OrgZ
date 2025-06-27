import { Box, Divider, Paper, Typography } from "@mui/material";
import TodoColumnButtons from "./TodoColumnButtons";
import type { TodoColumnProps } from "../../../../types/todoColumnProps";
import { useTodoDialogs } from "../../../../contexts/TodoDialogContext ";

export function TodoColumn({
  title,
  category,
  items,
  handleAdd,
  handleDelete,
  handleUpdate,
}: TodoColumnProps) {
  const { handleOpen } = useTodoDialogs();

  return (
    <Paper
      elevation={3}
      sx={{
        m: 0,
        p: 2,
        bgcolor: "background.paper",
        borderRadius: 1,
        minWidth: 177,
        width: "100%",
        height: "calc(100vh - 100px)",
        overflowY: "auto",
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h6" fontSize={18}>
          {title}
        </Typography>
        <Box display="flex" gap={1}>
          <TodoColumnButtons
            category={category}
            onAdd={handleAdd}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        </Box>
      </Box>
      <Divider sx={{ mb: 2, mt: 1 }} />
      {items.map((item) => (
        <Box
          key={item.id}
          sx={{
            p: 2,
            mb: 1,
            borderRadius: 1,
            boxShadow: 1,
          }}
          id={item.id}
          onClick={() => handleOpen("edit", item)}
        >
          <Typography fontWeight="bold">{item.title}</Typography>
          <Typography variant="caption" fontSize={10}>
            ID: {item.id}
          </Typography>
        </Box>
      ))}
    </Paper>
  );
}
