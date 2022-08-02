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

const ZenDataGrid = styled(DataGrid)<DataGridProps>(({ theme }) => ({
  "&.MuiDataGrid-root .MuiDataGrid-columnHeader:focus, &.MuiDataGrid-root .MuiDataGrid-cell:focus":
    {
      outline: "none",
    },
}));

const senders: GridRowsProp = [
  { id: 1, name: "for myself", email: "@", isActive: true },
  { id: 2, name: "for my family", email: "@",  isActive: true },
  { id: 3, name: "for my friends", email: "@",  isActive: true },
  { id: 4, name: "for my colleagues", email: "@",  isActive: true},
  { id: 5, name: "for my boss", email: "@",  isActive: true },
];

const columns: GridColDef[] = [
  {
    field: "isActive",
    headerName: "isActive",
    renderCell: (params) => (
      <Button
        variant="contained"
        size="small"
        style={{ marginLeft: 16 }}
        tabIndex={params.hasFocus ? 0 : -1}>
        delete
      </Button>
    ),
  },
  { field: "name", headerName: "Column 1", width: 200 },
  { field: "email", headerName: "Column 2", width: 200 },
  {
    field: "id",
    headerName: "",
    renderCell: (params) => (
      <Button
        variant="contained"
        size="small"
        style={{ marginLeft: 16 }}
        tabIndex={params.hasFocus ? 0 : -1}>
        delete
      </Button>
    ),
  },
];

const Senders: FC = () => {
  const [selectedSender, setSelectedSender] = React.useState<any>(null);
  return (
    <Grid container spacing={2} sx={{ height: "100%" }}>
      <Grid item xs={8}>
        <ZenDataGrid
          autoHeight
          rows={senders}
          columns={columns}
          onSelectionModelChange={(newSelection: any) => {
            setSelectedSender(newSelection[0]);
          }}
          pagination
          pageSize={10}
          disableMultipleSelection
        />
      </Grid>
      <Grid item xs={4}>
        Choose an element to see its details
      </Grid>
    </Grid>
  );
};

export default Senders;
