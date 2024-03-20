import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import "./LineChartStyles.css";

const chartData = require("../Data/areachart.json");

function getAreaChatDataFromJson() {
  const pop_vac_data = [];
  const fully_imm = [];
  const unvacc = [];
  const names = [];

  for (let i = 0; i < chartData.length; i++) {
    pop_vac_data.push(chartData[i]["Population (vaccination data)"]);
    fully_imm.push(chartData[i]["# of population fully immunized"]);
    unvacc.push(chartData[i]["Unvaccinated"]);
    const cropped_name = chartData[i]["Location"]
      .replace("Edmonton - ", "")
      .replace(" (& Nearby Neighbourhoods)", "")
      .replace("South & East", "");
    names.push(cropped_name);
  }
  return [pop_vac_data, fully_imm, unvacc, names];
}

export default function AreaChartTabTwo(props) {
  const myAreaChartData = getAreaChatDataFromJson();
  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: "0.05vh 0.05vw 2vh 0.05vw",
        height: "89.25vh",
        backgroundColor: "#80DEEA",
      }}
    >
      <Paper elevation={3} sx={{ height: "100%", backgroundColor: "#7DCEA0" }}>
        <Typography
          variant="h4"
          gutterBottom
          align="left"
          paddingLeft="2vw"
          paddingTop="1vh"
          fontWeight="bold"
          color="white"
        >
          Trends in COVID-19 Vaccination Coverage
          <LineChart
            width={1700}
            height={650}
            series={[
              {
                data: myAreaChartData[0],
                label: "Population (vaccination data)",
                area: true,
                stack: "total",
                showMark: false,
              },
              {
                data: myAreaChartData[1],
                label: "# of population fully immunized",
                area: true,
                stack: "total",
                showMark: false,
              },
              {
                data: myAreaChartData[2],
                label: "Population Unvaccinated",
                area: true,
                stack: "total",
                showMark: false,
              },
            ]}
            xAxis={[{ scaleType: "point", data: myAreaChartData[3] }]}
            sx={{
              ".MuiLineElement-root": {
                display: "none",
              },
            }}
            className="custom-line-chart"
          />
        </Typography>
        <Typography
          variant="h6"
          gutterBottom
          align="left"
          paddingLeft="1vw"
          paddingRight="1vw"
          paddingTop="0.5vh"
          color="black"
        >
          The area chart presented visualizes the trends in COVID-19 vaccination
          coverage alongside the population distribution across different areas
          within Edmonton City. The chart provides insights into the progress of
          vaccination efforts and the demographic composition of the population.
        </Typography>
      </Paper>
    </Box>
  );
}
