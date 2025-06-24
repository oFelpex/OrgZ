import { Checkbox, FormControlLabel } from "@mui/material";
import React, { memo } from "react";

interface Props {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ImportantCheckbox = memo(({ checked, onChange }: Props) => (
  <FormControlLabel
    control={
      <Checkbox checked={checked} onChange={onChange} name="important" />
    }
    label="Important"
  />
));
