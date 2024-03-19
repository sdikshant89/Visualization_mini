import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "userId",
    headerName: "User ID",
    width: 90,
  },
  {
    field: "title",
    headerName: "Title",
    width: 230,
  },
  {
    field: "body",
    headerName: "Description",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 280,
  },
];

export default function DataGridDemo(props) {
  return (
    <Box sx={{ height: "90%", width: "95%", padding: "2vh 1vw 2vh 1vw" }}>
      <DataGrid
        rows={props.data}
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
