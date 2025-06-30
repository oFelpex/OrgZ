import { Checkbox, FormControlLabel, Box } from "@mui/material";
import { memo } from "react";
import type { TodoSection } from "../../../../../../../types/todoTypes";

interface Props {
  status: TodoSection;
  onStatusChange: (statusValue: TodoSection) => void;
}

export const StatusCheckboxes = memo(({ status, onStatusChange }: Props) => {
  console.log(status);
  return (
    <Box>
      {["todo", "onGoing", "done"].map((section) => (
        <FormControlLabel
          key={section}
          control={
            <Checkbox
              checked={status === section}
              onChange={() => onStatusChange(section as TodoSection)}
            />
          }
          label={section.charAt(0).toUpperCase() + section.slice(1)}
        />
      ))}
    </Box>
  );
});
