import { cloneElement, type ReactElement } from "react";

import { Typography, Box, type SvgIconProps } from "@mui/material";

type SelectPageContentItemProps = {
  title: string;
  subTitle?: string;
  icon?: ReactElement<SvgIconProps>;
};

export default function SelectPageContentItem({
  icon,
  title,
  subTitle,
}: SelectPageContentItemProps) {
  let stylizedIcon: ReactElement<SvgIconProps> | undefined;
  if (icon) {
    stylizedIcon = cloneElement(icon, {
      sx: {
        borderRadius: "50%",
        bgcolor: "background.paper",
        p: 0.3,
      },
    });
  }

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
      }}
    >
      {stylizedIcon}
      <Box>
        <Typography variant="body2">{title}</Typography>
        <Typography variant="caption">{subTitle}</Typography>
      </Box>
    </Box>
  );
}
