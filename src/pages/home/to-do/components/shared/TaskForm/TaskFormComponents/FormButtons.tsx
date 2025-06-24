import { Box, Button, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { memo } from "react";

interface Props {
  onCancel: () => void;
}

export const FormButtons = memo(({ onCancel }: Props) => (
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
      Create Task
    </Button>
  </Box>
));
