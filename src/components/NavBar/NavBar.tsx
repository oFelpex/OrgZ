import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Stack } from "@mui/material";

import Brightness7Icon from "@mui/icons-material/Brightness7";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import GitHubIcon from "@mui/icons-material/GitHub";

import { useColorMode } from "../../hooks/useColorMode";
import { ButtonForIcon } from "../Buttons/ButtonForIcon/ButtonForIcon";

export function NavBar() {
  const { toggleColorMode, mode } = useColorMode();
  const themeIcon = mode === "dark" ? <BedtimeIcon /> : <Brightness7Icon />;

  return (
    <AppBar>
      <Toolbar>
        <Stack direction="row" spacing={1} alignItems="center">
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

          <ButtonForIcon
            onClick={toggleColorMode}
            icon={themeIcon}
            tooltipTitle="Change Theme"
          />
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
