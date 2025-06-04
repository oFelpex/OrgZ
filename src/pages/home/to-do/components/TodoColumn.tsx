import { Box, Divider, Paper, Typography } from "@mui/material";

interface TodoColumnProps {
  title: string;
  items: string[];
}

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
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
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
