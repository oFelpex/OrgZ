import { useState } from "react";

import {
  FormControl,
  Select,
  MenuItem,
  type SelectChangeEvent,
} from "@mui/material";

import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";

export default function SelectPageContent() {
  const [page, setPage] = useState("To-Do");

  const handleChangePage = (event: SelectChangeEvent) => {
    setPage(event.target.value);
  };

  return (
    <FormControl sx={{ width: "100%", p: 1.5 }}>
      <Select
        value={page}
        onChange={handleChangePage}
        IconComponent={UnfoldMoreIcon}
      >
        <MenuItem disabled value="">
          Organize
        </MenuItem>
        <MenuItem value="To-Do">To-Do</MenuItem>
        <MenuItem value="Notes">Notes</MenuItem>
        <MenuItem disabled value="">
          Overview
        </MenuItem>
        <MenuItem value="Calendar">Calendar</MenuItem>
      </Select>
    </FormControl>
  );
}
