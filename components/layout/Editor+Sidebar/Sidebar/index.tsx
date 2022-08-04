import { Grid } from "@mui/material";
import { FC } from "react";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: FC<SidebarProps> = ({
  children,
}) => (
  <Grid item xs={3} sx={{ borderLeft: 1, borderColor: "secondary.main" }}>
    {children}
  </Grid>
);

export default Sidebar;
