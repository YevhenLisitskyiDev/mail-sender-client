import { Grid } from "@mui/material";
import { height } from "@mui/system";
import { FC } from "react";

const ListContainer: FC<{ children: JSX.Element | JSX.Element[] }> = ({
  children,
}) => {
  return (
    <Grid item xs={9}>
      {children}
    </Grid>
  );
};
export default ListContainer;
