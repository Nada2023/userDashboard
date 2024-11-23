import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import Switch from "@mui/material/Switch";
import { Button, ThemeProvider, createTheme } from "@mui/material";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "Phone", headerName: "Phone", width: 130 },
  { field: "location", headerName: "Location", width: 130 },
  { field: "Mail", headerName: "Mail", width: 130 },
  {
    field: "status",
    headerName: "Status",
    width: 180,
    renderCell: (params) => {
      const status = params.row.status;
      return (
        <Button
          variant="contained"
          color={status === "active" ? "success" : "error"}
          style={{ width: "100%" }}
        >
          {status === "active" ? "Active" : "Inactive"}
        </Button>
      );
    },
  },
  {
    field: "statusSwitch",
    headerName: " ",
    width: 180,
    renderCell: (params) => {
      const status = params.row.status;
      const handleSwitchChange = (event) => {
        params.api.updateRows([
          { ...params.row, status: event.target.checked ? "active" : "inactive" },
        ]);
      };

      return (
        <Switch
          checked={status === "active"}
          onChange={handleSwitchChange}
          inputProps={{ "aria-label": "Switch demo" }}
        />
      );
    },
  },
];

const rows = [
  { id: 1, Phone: "+2011111111", firstName: "Nada", location: "EG", Mail: "nada@gmail.com", status: "active" },
  { id: 2, Phone: "+2011111111", firstName: "Nada", location: "EG", Mail: "nada@gmail.com", status: "inactive" },
  // More rows...
];

const paginationModel = { page: 0, pageSize: 5 };

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  components: {
    MuiDataGrid: {
      styleOverrides: {
        root: {
          backgroundColor: "#2d3748",
        },
      },
    },
  },
});

export default function Table() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Paper sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          sx={{ border: 0 }}
        />
      </Paper>
    </ThemeProvider>
  );
}
