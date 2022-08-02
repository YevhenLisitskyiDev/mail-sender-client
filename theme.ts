import { createTheme } from "@mui/material";
import type {} from "@mui/x-data-grid/themeAugmentation";

export const theme = createTheme({
  palette: {
    secondary: {
      main: "#041C32",
      light: "#064663",
    },
    primary: {
      main: "#ECB365",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    // Use `MuiDataGrid` on DataGrid, DataGridPro and DataGridPremium
    MuiDataGrid: {
      styleOverrides: {
        root: {
          backgroundColor: "red",
        },
        row: {
          "&.Mui-selected": {
            backgroundColor: "rebeccapurple",
            color: "yellow",
            "&:hover": {
              backgroundColor: "purple",
            },
          },
        },
      },
    },
  },
});
