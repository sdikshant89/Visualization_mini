import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Link from "@mui/material/Link";

export default function ButtonAppBar() {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const myComponentFunction = () => {
    return (
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ backgroundColor: "lightblue" }}>
          {"About"}
        </DialogTitle>
        <DialogContent sx={{ backgroundColor: "lightblue" }}>
          <DialogContentText sx={{ backgroundColor: "lightblue" }}>
            This application is developed for learning purposes, as a part of
            University curriculum. You can find the code of the same in:{" "}
            <Link href="https://github.com/sdikshant89/visualization_mini">
              GitHub Repository
            </Link>
            <Typography variant="subtitle1">Developers:</Typography>
            <ul>
              <li>
                <Link href="mailto:dikshan2@ualberta.ca">
                  dikshan2@ualberta.ca
                </Link>
              </li>
            </ul>
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ backgroundColor: "lightblue" }}>
          <Button color="secondary" variant="contained" onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    );
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ height: "6.75vh", backgroundColor: "#0288D1" }}
      >
        <Toolbar>
          <Typography
            variant="h3"
            component="div"
            fontWeight="bold"
            sx={{ flexGrow: 1, color: "black" }}
          >
            Visualization Mini Project
          </Typography>

          <Button
            variant="contained"
            color="secondary"
            onClick={handleClickOpen}
          >
            About
          </Button>
          {myComponentFunction()}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
