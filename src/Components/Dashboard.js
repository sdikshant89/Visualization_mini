import Typography from "@mui/material/Typography";
import { PieChart } from "@mui/x-charts/PieChart";
import ViewTable from "./TableView";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import MybarChart from "./DashGraph";

export default function myDash(props) {
  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: "0.05vh 0.05vw 2vh 0.05vw",
        height: "89.25vh",
        backgroundColor: "#80DEEA",
      }}
    >
      <Grid container spacing={2} sx={{ height: "100%" }}>
        <Grid item xs={6} sx={{ height: "100%" }}>
          <Paper
            elevation={3}
            sx={{ height: "100%", backgroundColor: "#00796B" }}
          >
            <Typography
              variant="h4"
              gutterBottom
              align="left"
              paddingLeft="1vw"
              paddingTop="1vh"
              fontWeight="bold"
              color="white"
            >
              Bar Chart Viz
              <MybarChart />
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} sx={{ height: "100%" }}>
          <Grid container spacing={2} sx={{ height: "50%" }}>
            <Grid item xs={6} sx={{ height: "100%" }}>
              <Paper
                elevation={3}
                sx={{ height: "100%", backgroundColor: "#0288D1" }}
              >
                <Typography
                  variant="h4"
                  gutterBottom
                  align="left"
                  paddingLeft="1vw"
                  paddingTop="1vh"
                  fontWeight="bold"
                  color="white"
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
                  color="white"
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
                sx={{ height: "100%", backgroundColor: "#43A047" }}
              >
                <Typography
                  variant="h4"
                  gutterBottom
                  align="left"
                  paddingLeft="1vw"
                  paddingTop="1vh"
                  fontWeight="bold"
                  color="white"
                >
                  Data Predictions
                </Typography>
              </Paper>
            </Grid>
          </Grid>
          <Box sx={{ height: "2%" }} />
          <Paper
            elevation={3}
            sx={{ height: "50%", backgroundColor: "#F4511E" }}
          >
            <ViewTable data={props.data} />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
