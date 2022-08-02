import { BorderColor } from "@mui/icons-material";
import { Stack, Divider, Box, Grid, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  DataGrid,
  DataGridProps,
  GridRowsProp,
  GridColDef,
} from "@mui/x-data-grid";
import React from "react";
import { FC } from "react";
import ListContainer from "../../components/ListContainer";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

const ZenDataGrid = styled(DataGrid)<DataGridProps>(({ theme }) => ({
  "&.MuiDataGrid-root .MuiDataGrid-columnHeader:focus, &.MuiDataGrid-root .MuiDataGrid-cell:focus":
    {
      outline: "none",
    },
}));

const senders: GridRowsProp = [
  { id: 1, name: "for myself", email: "@", isActive: true },
  { id: 2, name: "for my family", email: "@", isActive: true },
  { id: 3, name: "for my friends", email: "@", isActive: false },
  { id: 4, name: "for my colleagues", email: "@", isActive: true },
  { id: 5, name: "for my boss", email: "@", isActive: true },
];

const columns: GridColDef[] = [
  { field: "name", headerName: "Senderr Name", width: 200 },
  { field: "email", headerName: "Senderr Email", width: 400 },
  {
    field: "isActive",
    headerName: "",
    renderCell: (params) =>
      params.row.isActive ? (
        <Button
          variant="outlined"
          color="primary"
          size="small"
          tabIndex={params.hasFocus ? 0 : -1}>
          Stop senderr
        </Button>
      ) : (
        <Button
          variant="contained"
          size="small"
          tabIndex={params.hasFocus ? 0 : -1}>
          Start sender
        </Button>
      ),
    width: 200,
  },
];

const Senders: FC = () => {
  const [selectedSender, setSelectedSender] = React.useState<any>(null);
  return (
    <Grid container spacing={2} sx={{ height: "calc(100vh - 50px)" }}>
      <ListContainer>
        <Box height={"100%"}>
          <ZenDataGrid
            rows={senders}
            columns={columns}
            onSelectionModelChange={(newSelection: any) => {
              setSelectedSender(newSelection[0]);
            }}
            pagination
            pageSize={10}
            disableMultipleSelection={true}
          />
        </Box>
      </ListContainer>
      <Grid item xs={3}>
        {selectedSender}
      </Grid>
    </Grid>
  );
};

export default Senders;
