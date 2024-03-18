import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";

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

export default function DataGridDemo() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setData(response.data);
        setLoading(false);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <Box sx={{ height: "89%", width: "95%", padding: "2vh 1vw 2vh 1vw" }}>
      {!loading && data && (
        <DataGrid
          rows={data}
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
            borderColor: "primary.light",
            color: "white",
            backgroundColor: "#6b7384",
          }}
        />
      )}
      {loading && <p>Loading...</p>}

      {!loading && !data && <p>Error fetching data. Please try again later.</p>}
    </Box>
  );
}
