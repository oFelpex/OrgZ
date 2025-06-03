import { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import { Divider, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

import MenuIcon from "@mui/icons-material/Menu";

import NavBar from "../NavBar/NavBar";
import SideNavBarDrawer from "./SideNavBarDrawer";
import type { Props } from "./SelectPageContent/menuItems";

const drawerWidth = 240;

export default function SideNavBar({
  selectedSection,
  setSelectedSection,
}: Props) {
  const isMobile: boolean = useMediaQuery("(min-width:600px)");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <NavBar />
        </Toolbar>
        <Divider />

        {/* NAV BAR EXTRA WHEN WIDTH < 600PX */}
        {!isMobile && (
          <Toolbar>
            <Box
              position="relative"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              width="100%"
            >
              <Typography
                variant="h1"
                sx={{ fontSize: "28px", fontWeight: "bold" }}
              >
                OrgZ
              </Typography>
              <Typography
                variant="body1"
                position="absolute"
                left="50%"
                sx={{ transform: "translateX(-50%)" }}
              >
                {selectedSection}
              </Typography>
            </Box>
          </Toolbar>
        )}
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          slotProps={{
            root: {
              keepMounted: true,
            },
          }}
        >
          <SideNavBarDrawer
            setSelectedSection={setSelectedSection}
            selectedSection={selectedSection}
          />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          <SideNavBarDrawer
            setSelectedSection={setSelectedSection}
            selectedSection={selectedSection}
          />
        </Drawer>
      </Box>
    </>
  );
}
