import { Grid } from "@mui/material";
import { FC } from "react";

const Sidebar: FC<{ children: JSX.Element | JSX.Element[] }> = ({
  children,
}) => (
  <Grid item xs={3}>
    {children}
  </Grid>
);

export default Sidebar;
