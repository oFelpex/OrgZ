import { Divider, List, Toolbar } from "@mui/material";

import SelectPageContent from "./SelectPageContent/SelectPageContent";
import type { Props } from "./SelectPageContent/menuItems";

export default function SideNavBarDrawer({
  selectedSection,
  setSelectedSection,
}: Props) {
  return (
    <div>
      <Toolbar />
      <Divider />
      <SelectPageContent
        setSelectedSection={setSelectedSection}
        selectedSection={selectedSection}
      />
      <Divider />
      <List>{/* LIST TO PUT SOME BUTONS */}teste</List>
      <Divider />
      <List>{/* LIST TO PUT SOME OTHER BUTONS */}teste2</List>
    </div>
  );
}
