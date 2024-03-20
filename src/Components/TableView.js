import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const tableData = require("../Data/dataset.json");

const columns = [
  {
    field: "Location",
    headerName: "Alberta Area",
    description: "Alberta areas",
    width: 300,
  },
  {
    field: "Total Cases",
    headerName: "Total Cases",
    width: 100,
  },
  {
    field: "Active Cases",
    headerName: "Active Cases",
    width: 100,
  },
  {
    field: "Deaths",
    headerName: "Deaths",
    description: "Deaths till date",
    width: 80,
  },
  {
    field: "# of population fully immunized",
    headerName: "Immunised Population",
    description:
      "Number of people in the area vaccinated all the way with both doses",
    sortable: false,
    width: 170,
  },
];

export default function DataGridDemo(props) {
  return (
    <Box sx={{ height: "90%", width: "95%", padding: "2vh 1vw 2vh 1vw" }}>
      <DataGrid
        rows={tableData}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[3, 5]}
        checkboxSelection
        sx={{
          border: 2.5,
          borderColor: "black",
          color: "white",
        }}
      />
    </Box>
  );
}
