import { TextField } from "@mui/material";
import React, { memo } from "react";

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TitleInput = memo(({ value, onChange }: Props) => (
  <TextField
    label="Task Name"
    name="title"
    value={value}
    onChange={onChange}
    required
  />
));
