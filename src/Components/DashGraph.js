import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import { BarChart } from "@mui/x-charts/BarChart";
import Grid from "@mui/material/Grid";

export default function BarAnimation() {
  const [seriesNb, setSeriesNb] = React.useState(6);
  const [itemNb, setItemNb] = React.useState(1);
  const customLabels = [
    "Total Population",
    "Total Cases",
    "At least 1 dose",
    "Fully immunized",
    "Total Doses",
  ];

  const handleItemNbChange = (event, newValue) => {
    if (typeof newValue !== "number") {
      return;
    }
    setItemNb(newValue);
  };
  const handleSeriesNbChange = (event, newValue) => {
    if (typeof newValue !== "number") {
      return;
    }
    setSeriesNb(newValue);
  };

  return (
    <Box sx={{ width: "98%", paddingTop: "1vh" }}>
      <BarChart
        height={window.innerHeight * 0.7}
        series={series.slice(0, seriesNb).map((s) => ({
          ...s,
          data: s.data.slice(0, itemNb),
        }))}
        xAxis={[
          {
            scaleType: "band",
            data: customLabels.slice(0, itemNb),
          },
        ]}
      />
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={6}>
          <Typography
            id="input-item-number"
            variant="h6"
            sx={{ color: "black" }}
            gutterBottom
          >
            Number of Properties
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Slider
            value={itemNb}
            onChange={handleItemNbChange}
            valueLabelDisplay="auto"
            min={1}
            max={5}
            aria-labelledby="input-item-number"
            sx={{ color: "yellow" }}
          />
        </Grid>
      </Grid>

      <Grid container spacing={2} alignItems="center">
        <Grid item xs={6}>
          <Typography
            id="input-series-number"
            variant="h6"
            gutterBottom
            sx={{ color: "black" }}
          >
            Edmonton Areas to Display
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Slider
            value={seriesNb}
            onChange={handleSeriesNbChange}
            valueLabelDisplay="auto"
            min={1}
            max={15}
            aria-labelledby="input-series-number"
            sx={{ color: "orange" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

const highlightScope = {
  highlighted: "series",
  faded: "global",
};

const series = [
  {
    label: "Eastwood",
    data: [72038, 9598, 57956, 53915, 139410],
  },
  {
    label: "Woodcroft East",
    data: [60597, 7834, 49917, 47287, 122915],
  },
  {
    label: "Bonnie Doon",
    data: [96590, 10618, 85619, 80784, 216983],
  },
  {
    label: "Northgate",
    data: [82944, 12071, 68236, 65127, 165501],
  },
  {
    label: "Duggan",
    data: [40124, 4643, 34845, 33202, 87933],
  },
  {
    label: "Mill Woods West",
    data: [51142, 6830, 43402, 41201, 105237],
  },
  {
    label: "Castle Downs",
    data: [71552, 12122, 59500, 57107, 145046],
  },
  {
    label: "Abbottsfield",
    data: [14570, 1691, 10853, 10204, 25723],
  },
  {
    label: "Twin Brooks",
    data: [75942, 8030, 67368, 65264, 175065],
  },
  {
    label: "Mill Woods South-East",
    data: [85258, 13248, 74521, 71262, 177338],
  },
  {
    label: "Jasper Place",
    data: [46890, 6568, 37919, 36066, 93444],
  },
  {
    label: "Rutherford",
    data: [112250, 18241, 100423, 96286, 242500],
  },
  {
    label: "Woodcroft West",
    data: [33005, 4357, 28233, 26737, 69461],
  },
  {
    label: "NorthEast",
    data: [90706, 13510, 74382, 71034, 177146],
  },
  {
    label: "West Jasper Place",
    data: [103425, 15251, 93091, 89946, 234308],
  },
].map((s) => ({ ...s, highlightScope }));
