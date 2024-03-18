import Typography from "@mui/material/Typography";
import { PieChart } from "@mui/x-charts/PieChart";
import ViewTable from "./Components/TableView";
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
              <Typography
                variant="h4"
                gutterBottom
                align="left"
                paddingLeft="1vw"
                paddingTop="1vh"
                fontWeight="bold"
              >
                Visual Map
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={6} sx={{ height: "100%" }}>
            <Grid container spacing={2} sx={{ height: "50%" }}>
              <Grid item xs={6} sx={{ height: "100%" }}>
                <Paper
                  elevation={3}
                  sx={{ height: "100%", backgroundColor: "#535b6c" }}
                >
                  <Typography
                    variant="h4"
                    gutterBottom
                    align="left"
                    paddingLeft="1vw"
                    paddingTop="1vh"
                    fontWeight="bold"
                  >
                    Pie Chart for Analysis
                  </Typography>
                  <PieChart
                    sx={{ padding: "1vh 0.5vw 1vh 0.5vw" }}
                    series={[
                      {
                        data: [
                          { id: 0, value: 10, label: "series A" },
                          { id: 1, value: 15, label: "series B" },
                          { id: 2, value: 20, label: "series C" },
                        ],
                      },
                    ]}
                    width={425}
                    height={275}
                  />
                  <Typography
                    variant="body1"
                    gutterBottom
                    align="left"
                    paddingLeft="1vw"
                    paddingTop="0.5vh"
                  >
                    *This is a sample text to represent the above graph
                    visaulising the data
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={6} sx={{ height: "100%" }}>
                <Paper
                  variant="outlined"
                  elevation={3}
                  sx={{ height: "100%", backgroundColor: "#535b6c" }}
                >
                  <Typography
                    variant="h4"
                    gutterBottom
                    align="left"
                    paddingLeft="1vw"
                    paddingTop="1vh"
                    fontWeight="bold"
                  >
                    Data Predictions
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
            <Box sx={{ height: "2%" }} />
            <Paper
              elevation={3}
              sx={{ height: "50%", backgroundColor: "#535b6c" }}
            >
              <ViewTable />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
