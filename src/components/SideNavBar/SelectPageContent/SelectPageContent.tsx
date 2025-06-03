import { useState } from "react";

import {
  FormControl,
  Select,
  MenuItem,
  type SelectChangeEvent,
} from "@mui/material";

import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";

import SelectPageContentItem from "./SelectPageContentItem";
import { menuItems } from "./menuItems";

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
        sx={{ height: "65px" }}
      >
        {menuItems.map((menuItem) => (
          <MenuItem
            disabled={menuItem.value ? false : true}
            value={menuItem.value}
            sx={{
              height: menuItem.value ? "55px" : "20px",
              borderRadius: 2,
              m: 1,
              "&.Mui-selected": {
                backgroundColor: "background.default",
                ":hover": {
                  backgroundColor: "background.default",
                },
              },
            }}
          >
            <SelectPageContentItem
              icon={menuItem.icon}
              title={menuItem.title}
              subTitle={menuItem.subTitle}
            />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
