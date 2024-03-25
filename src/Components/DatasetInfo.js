import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

export default function DatasetInfo() {
  return (
    <Grid container spacing={2} sx={{ height: "50%" }}>
      <Grid item xs={9}>
        <Typography
          variant="h6"
          gutterBottom
          align="left"
          paddingLeft="1vw"
          paddingTop="1vh"
          color="white"
          height={window.innerHeight * 0.02}
        >
          No. of People fully vaccinated
        </Typography>
      </Grid>
      <Grid item xs={3} alignItems={"left"}>
        <Box
          sx={{
            paddingTop: "0.5vh",
            paddingRight: "0.5vw",
            alignItems: "flex-start",
          }}
        >
          <Chip
            variant="outlined"
            label="3409196"
            sx={{ color: "white", width: "17vw", height: "4vh" }}
          />
        </Box>
      </Grid>
      <Grid item xs={9}>
        <Typography
          variant="h6"
          gutterBottom
          align="left"
          paddingLeft="1vw"
          paddingTop="1vh"
          color="white"
          height={window.innerHeight * 0.02}
        >
          Total Area Covered
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Box
          sx={{
            paddingTop: "0.5vh",
            paddingRight: "0.5vw",
            alignItems: "flex-start",
          }}
        >
          <Chip
            variant="outlined"
            label="132"
            sx={{ color: "white", width: "17vw", height: "4vh" }}
          />
        </Box>
      </Grid>
      <Grid item xs={9}>
        <Typography
          variant="h6"
          gutterBottom
          align="left"
          paddingLeft="1vw"
          paddingTop="1vh"
          color="white"
          height={window.innerHeight * 0.02}
        >
          Total Deaths
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Box
          sx={{
            paddingTop: "0.5vh",
            paddingRight: "0.5vw",
            alignItems: "flex-start",
          }}
        >
          <Chip
            variant="outlined"
            label="4889"
            sx={{ color: "white", width: "17vw", height: "4vh" }}
          />
        </Box>
      </Grid>
      <Grid item xs={9}>
        <Typography
          variant="h6"
          gutterBottom
          align="left"
          paddingLeft="1vw"
          paddingTop="1vh"
          color="white"
          height={window.innerHeight * 0.02}
        >
          Total Unvaccinated
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Box
          sx={{
            paddingTop: "0.5vh",
            paddingRight: "0.5vw",
            alignItems: "flex-start",
          }}
        >
          <Chip
            variant="outlined"
            label="3409196"
            sx={{ color: "white", width: "17vw", height: "4vh" }}
          />
        </Box>
      </Grid>
      <Grid item xs={9}>
        <Typography
          variant="h6"
          gutterBottom
          align="left"
          paddingLeft="1vw"
          paddingTop="1vh"
          color="white"
          height={window.innerHeight * 0.02}
        >
          people vaccinated (least once)
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Box
          sx={{
            paddingTop: "0.5vh",
            paddingRight: "0.5vw",
            alignItems: "flex-start",
          }}
        >
          <Chip
            variant="outlined"
            label="3579259"
            sx={{ color: "white", width: "17vw", height: "4vh" }}
          />
        </Box>
      </Grid>
    </Grid>
  );
}
