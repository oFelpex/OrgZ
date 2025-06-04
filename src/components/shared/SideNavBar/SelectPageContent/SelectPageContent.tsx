import {
  FormControl,
  Select,
  MenuItem,
  type SelectChangeEvent,
} from "@mui/material";

import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";

import SelectPageContentItem from "./SelectPageContentItem";
import { menuItems, type SelectPageProps } from "./menuItems";

export default function SelectPageContent({
  selectedSection,
  setSelectedSection,
}: SelectPageProps) {
  const handleChangePage = (event: SelectChangeEvent) => {
    const value = event.target.value as "To-Do" | "Notes" | "Calendar";
    setSelectedSection(value);
  };

  return (
    <FormControl sx={{ width: "100%", p: 1.5 }}>
      <Select
        value={selectedSection}
        onChange={handleChangePage}
        IconComponent={UnfoldMoreIcon}
        sx={{ height: "65px" }}
      >
        {menuItems.map((menuItem, idx) => (
          <MenuItem
            key={idx}
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
