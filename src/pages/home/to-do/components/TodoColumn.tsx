import { Box, Divider, Paper, Typography } from "@mui/material";

import NoteAddIcon from "@mui/icons-material/NoteAdd";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import { ButtonForIcon } from "../../../../components/shared/Buttons/ButtonForIcon/ButtonForIcon";
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
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h6" fontSize={18}>
          {title}
        </Typography>
        <Box display="flex" gap={1}>
          <ButtonForIcon icon={<NoteAddIcon />} />
          <ButtonForIcon icon={<EditNoteIcon />} />
          <ButtonForIcon icon={<DeleteForeverIcon />} />
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
