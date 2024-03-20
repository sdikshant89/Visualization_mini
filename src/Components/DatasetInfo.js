import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

export default function DatasetInfo() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={9}>
        <Typography
          variant="h6"
          gutterBottom
          align="left"
          paddingLeft="1vw"
          paddingTop="1vh"
          color="white"
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
