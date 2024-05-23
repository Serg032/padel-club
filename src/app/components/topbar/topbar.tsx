"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
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

const TopBar = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <Grid display={"flex"} gap={2} alignItems={"center"}>
                <HomeIcon />
                <span>Home</span>
              </Grid>
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <Grid display={"flex"} gap={2} alignItems={"center"}>
                <BookingIcon />
                <span>Bookings</span>
              </Grid>
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <Grid display={"flex"} gap={2} alignItems={"center"}>
                <NewsIcon />
                <span>School</span>
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
                <span>Login</span>
              </Grid>
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <Grid display={"flex"} gap={2} alignItems={"center"}>
                <RegisterIcon />
                <span>Register</span>
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
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
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

export default TopBar;
