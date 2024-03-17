import AppTopBar from "./Components/AppBar";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import "./App.css";

function App() {
  return (
    <div className="App">
      <AppTopBar />
      <Box
        sx={{
          flexGrow: 1,
          padding: "2vh 1vw 2vh 1vw",
          backgroundColor: "#282c34",
          height: "89.25vh",
        }}
      >
        <Grid container spacing={2} sx={{ height: "100%" }}>
          <Grid item xs={6} sx={{ height: "100%" }}>
            <Paper
              elevation={3}
              sx={{ height: "100%", backgroundColor: "#535b6c" }}
            >
              "Text"
            </Paper>
          </Grid>
          <Grid item xs={6} sx={{ height: "100%" }}>
            <Grid container spacing={2} sx={{ height: "50%" }}>
              <Grid item xs={6} sx={{ height: "100%" }}>
                <Paper
                  elevation={3}
                  sx={{ height: "100%", backgroundColor: "#535b6c" }}
                >
                  "Text"
                </Paper>
              </Grid>
              <Grid item xs={6} sx={{ height: "100%" }}>
                <Paper
                  elevation={3}
                  sx={{ height: "100%", backgroundColor: "#535b6c" }}
                >
                  "Text"
                </Paper>
              </Grid>
            </Grid>
            <Box sx={{ height: "2%" }} />
            <Paper
              elevation={3}
              sx={{ height: "50%", backgroundColor: "#535b6c" }}
            >
              "Text"
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
