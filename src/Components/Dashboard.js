import Typography from "@mui/material/Typography";
import { PieChart } from "@mui/x-charts/PieChart";
import ViewTable from "./TableView";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import MybarChart from "./DashGraph";
import Datainfo from "./DatasetInfo";

export default function myDash(props) {
  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: "0.05vh 0.05vw 2vh 0.05vw",
        height: "89.25vh",
        backgroundColor: "white",
      }}
    >
      <Grid container spacing={2} sx={{ height: "100%" }}>
        <Grid item xs={6} sx={{ height: "100%" }}>
          <Paper
            elevation={3}
            sx={{ height: "100%", backgroundColor: "#808B96" }}
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
              COVID-19 Data: Edmonton City Areas
              <MybarChart />
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} sx={{ height: "100%" }}>
          <Grid container spacing={2} sx={{ height: "50%" }}>
            <Grid item xs={6} sx={{ height: "100%" }}>
              <Paper
                elevation={3}
                sx={{ height: "100%", backgroundColor: "#979A9A" }}
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
                  COVID-19 Deaths
                </Typography>
                <PieChart
                  height={window.innerHeight * 0.25}
                  width={window.innerWidth * 0.25}
                  sx={{
                    padding: "0.2vh 0.5vw 1vh 0.5vw",
                    // display: "flex",
                    // justifyContent: "space-around",
                  }}
                  series={[
                    {
                      data: [
                        { id: 0, value: 1456, label: "Edmonton" },
                        { id: 1, value: 1167, label: "Calgary" },
                        { id: 2, value: 2266, label: "Misc" },
                      ],
                    },
                  ]}
                />
                <Typography
                  variant="body1"
                  gutterBottom
                  align="left"
                  paddingLeft="1vw"
                  paddingTop="0.5vh"
                  color="Black"
                  height={window.innerHeight * 0.1}
                >
                  Percentages represents the proportion of total COVID-19 deaths
                  in Alberta
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
                  Alberta Overview
                </Typography>
                <Datainfo />
              </Paper>
            </Grid>
          </Grid>
          <Box sx={{ height: "2%" }} />
          <Paper
            elevation={3}
            sx={{ height: "50%", backgroundColor: "#DC7633" }}
          >
            <ViewTable data={props.data} />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
