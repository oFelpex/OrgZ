import { Box, Divider, Paper, Typography } from "@mui/material";

import TodoColumnButtons from "./TodoColumnButtons";
import type { TodoColumnProps } from "../../../../types/todoColumnProps";

export function TodoColumn({ title, items }: TodoColumnProps) {
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
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h6" fontSize={18}>
          {title}
        </Typography>
        <Box display="flex" gap={1}>
          <TodoColumnButtons />
        </Box>
      </Box>
      <Divider sx={{ mb: 2, mt: 1 }} />
      {items.map((item, idx) => (
        <Box
          key={idx}
          sx={{
            p: 2,
            mb: 1,
            borderRadius: 1,
            boxShadow: 1,
          }}
        >
          {item}
        </Box>
      ))}
    </Paper>
  );
}
