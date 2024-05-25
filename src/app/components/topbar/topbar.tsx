"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import HomeIcon from "@mui/icons-material/Home";
import BookingIcon from "@mui/icons-material/BookOnline";
import NewsIcon from "@mui/icons-material/Newspaper";
import LoginIcon from "@mui/icons-material/Login";
import RegisterIcon from "@mui/icons-material/AppRegistration";
import Grid from "@mui/material/Grid";
import { SwipeableDrawer } from "@mui/material";
import Fab from "@mui/material/Fab";
import { styled } from "@mui/material/styles";
import theme from "@/app/theme";
import Link from "next/link";

const BottomBar = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const StyledFab = styled(Fab)({
    position: "absolute",
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: "0 auto",
    backgroundColor: theme.palette.primary.light,
  });

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <Grid display={"flex"} gap={2} alignItems={"center"}>
                <HomeIcon />
                <Typography variant="body1">Home</Typography>
              </Grid>
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <Grid display={"flex"} gap={2} alignItems={"center"}>
                <BookingIcon />
                <Typography variant="body1">Bookings</Typography>
              </Grid>
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <Grid display={"flex"} gap={2} alignItems={"center"}>
                <NewsIcon />
                <Typography variant="body1">School</Typography>
              </Grid>
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <Grid display={"flex"} gap={2} alignItems={"center"}>
                <LoginIcon />
                <Typography variant="body1">Login</Typography>
              </Grid>
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <Grid display={"flex"} gap={2} alignItems={"center"}>
                <RegisterIcon />
                <Typography variant="body1">
                  <Link href="/register">Register</Link>
                </Typography>
              </Grid>
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{ top: "auto", bottom: 0 }}>
        <Toolbar>
          <StyledFab color="secondary" aria-label="add">
            <MenuIcon onClick={toggleDrawer(true)} />
          </StyledFab>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Central Padel
          </Typography>
          <Button color="inherit">
            <Typography variant="inherit">Login</Typography>
          </Button>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        anchor={"bottom"}
        open={open}
        onOpen={() => {}}
        onClose={toggleDrawer(false)}
      >
        {DrawerList}
      </SwipeableDrawer>
    </Box>
  );
};

export default BottomBar;
