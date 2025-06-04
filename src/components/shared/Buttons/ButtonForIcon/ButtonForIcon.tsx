import IconButton from "@mui/material/IconButton";
import { useColorMode } from "../../../../hooks/useColorMode";
import { Tooltip } from "@mui/material";

type ButtonForIconProps = {
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => void;
  icon: React.ReactElement;
  href?: string;
  tooltipTitle?: string;
};

export function ButtonForIcon({
  onClick,
  icon,
  href,
  tooltipTitle,
}: ButtonForIconProps) {
  const { mode } = useColorMode();

  return (
    <>
      <Tooltip title={tooltipTitle}>
        <IconButton
          component={href ? "a" : "button"}
          href={href}
          target={href ? "_blank" : undefined}
          rel={href ? "noopener noreferrer" : undefined}
          sx={{
            borderRadius: "8px",
            border: "1px solid rgba(92, 100, 112, 0.3)",
            backgroundColor: mode === "dark" ? "#292929" : "#fcfcfd",
            boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.3)",

            ":hover": {
              border: "1px solid rgba(92, 100, 112, 0.3)",
            },
          }}
          onClick={onClick}
          aria-label="Button"
          color="inherit"
        >
          {icon}
        </IconButton>
      </Tooltip>
    </>
  );
}
