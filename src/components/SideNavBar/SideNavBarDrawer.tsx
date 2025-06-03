import { Divider, List, Toolbar } from "@mui/material";

import SelectPageContent from "./SelectPageContent/SelectPageContent";

export const SideNavBarDrawer = (
  <div>
    <Toolbar />
    <Divider />
    <SelectPageContent />
    <Divider />
    <List>{/* LIST TO PUT SOME BUTONS */}teste</List>
    <Divider />
    <List>{/* LIST TO PUT SOME OTHER BUTONS */}teste2</List>
  </div>
);
