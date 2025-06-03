import { Divider, List, Toolbar } from "@mui/material";

import SelectPageContent from "./SelectPageContent/SelectPageContent";

export const SideNavBarDrawer = (
  <div>
    <Toolbar />
    <Divider />
    <SelectPageContent />
    {/* TRANSFORM INTO ANOTHER COMPONENT */}
    <List>{/* LIST TO PUT SOME BUTONS */}</List>
    <Divider />
    {/* TRANSFORM INTO ANOTHER COMPONENT */}
    <List>{/* LIST TO PUT SOME OTHER BUTONS */}</List>
  </div>
);
