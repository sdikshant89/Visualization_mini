import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

const uData = [4000, 1890, 2390, 3490, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300, 1890, 2390, 3490];
const amtData = [2400, 2210, 0, 2000, 2181, 1890, 2390, 3490, 2500, 2100];
const xLabels = [
  "Page A",
  "Page B",
  "Page C",
  "Page D",
  "Page E",
  "Page F",
  "Page G",
  "Page H",
  "Page I",
  "Page J",
];

export default function AreaChartTabTwo(props) {
  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: "0.05vh 0.05vw 2vh 0.05vw",
        height: "89.25vh",
        backgroundColor: "#80DEEA",
      }}
    >
      <Paper elevation={3} sx={{ height: "100%", backgroundColor: "#0288D1" }}>
        <Typography
          variant="h4"
          gutterBottom
          align="left"
          paddingLeft="1vw"
          paddingTop="1vh"
          fontWeight="bold"
          color="white"
        >
          Area Chart Viz
          <LineChart
            width={1750}
            height={650}
            series={[
              {
                data: uData,
                label: "uv",
                area: true,
                stack: "total",
                showMark: false,
              },
              {
                data: pData,
                label: "pv",
                area: true,
                stack: "total",
                showMark: false,
              },
              {
                data: amtData,
                label: "amt",
                area: true,
                stack: "total",
                showMark: false,
              },
            ]}
            xAxis={[{ scaleType: "point", data: xLabels }]}
            sx={{
              ".MuiLineElement-root": {
                display: "none",
              },
            }}
          />
        </Typography>
      </Paper>
    </Box>
  );
}
