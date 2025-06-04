import { Box, Paper, Typography } from "@mui/material";

interface TodoColumnProps {
  title: string;
  items: string[];
}

export function TodoColumn({ title, items }: TodoColumnProps) {
  return (
    <Paper
      elevation={3}
      sx={{ flex: 1, p: 2, bgcolor: "background.paper", borderRadius: 2 }}
    >
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
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
