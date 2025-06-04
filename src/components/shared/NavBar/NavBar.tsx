import { Divider, Stack, Typography } from "@mui/material";

import Brightness7Icon from "@mui/icons-material/Brightness7";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import GitHubIcon from "@mui/icons-material/GitHub";
import useMediaQuery from "@mui/material/useMediaQuery";

import { useColorMode } from "../../../hooks/useColorMode";
import { ButtonForIcon } from "../Buttons/ButtonForIcon/ButtonForIcon";
export default function NavBar() {
  const isMobile: boolean = useMediaQuery("(min-width:600px)");

  const { toggleColorMode, mode } = useColorMode();
  const themeIcon = mode === "dark" ? <BedtimeIcon /> : <Brightness7Icon />;

  return (
    <Stack
      direction="row"
      width="100%"
      justifyContent="space-between"
      alignItems="center"
    >
      {isMobile && (
        <Typography variant="h1" sx={{ fontSize: 28, fontWeight: "bold" }}>
          OrgZ
        </Typography>
      )}
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        width="100%"
        justifyContent="flex-end"
      >
        <ButtonForIcon
          tooltipTitle="Github Project"
          href="https://github.com/oFelpex/OrgZ"
          icon={<GitHubIcon />}
        />
        <ButtonForIcon
          tooltipTitle="Portfolio Website"
          href="https://felpex-portfolio.vercel.app/"
          icon={<TravelExploreIcon />}
        />
        <Divider
          orientation="vertical"
          variant="middle"
          sx={{ height: "40px" }}
        />
        <ButtonForIcon
          onClick={toggleColorMode}
          icon={themeIcon}
          tooltipTitle="Change Theme"
        />
      </Stack>
    </Stack>
  );
}
