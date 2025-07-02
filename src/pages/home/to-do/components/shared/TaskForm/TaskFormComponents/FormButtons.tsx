import { Box, Button, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { memo } from "react";
import type { ActionType } from "../../../TodoTaskDialogs";

interface Props {
  onCancel: () => void;
  dialogTypeToOpen: ActionType;
}

export const FormButtons = memo(({ onCancel, dialogTypeToOpen }: Props) => (
  <Box position="relative" display="flex" alignItems="center" height={50}>
    <IconButton onClick={onCancel} sx={{ position: "relative", zIndex: 1 }}>
      <ArrowBackIcon />
    </IconButton>

    <Button
      type="submit"
      variant="contained"
      color="primary"
      sx={{
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {dialogTypeToOpen === "add" ? "Create Task" : "Edit Task"}
    </Button>
  </Box>
));
