import { Box, Divider, Paper, Typography } from "@mui/material";
import type { TodoColumnProps } from "../../../../types/todoColumnProps";
import { useTodoDialogs } from "../../../../contexts/TodoDialogContext ";

export function TodoColumn({ title, items }: TodoColumnProps) {
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
        height: "100dvh%",
        overflowY: "auto",
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h6" fontSize={18}>
          {title}
        </Typography>
      </Box>
      <Divider sx={{ mb: 2, mt: 1 }} />
      {items.map((item) => (
        <Box
          key={item.id}
          sx={{
            mb: 1,
            borderRadius: 1,
            boxShadow: 1,
          }}
          p={2}
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
