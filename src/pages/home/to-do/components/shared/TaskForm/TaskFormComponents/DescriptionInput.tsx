import { TextField } from "@mui/material";
import React, { memo } from "react";

interface Props {
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
}

export const DescriptionInput = memo(({ value, onChange }: Props) => (
  <TextField
    label="Description"
    name="description"
    value={value}
    onChange={onChange}
    multiline
    rows={3}
  />
));
