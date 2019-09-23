/*
import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import { Link } from 'react-router-dom';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { useAuth0 } from '../react-auth0-wrapper';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E20 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  hide: {
    display: 'none'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
  }
}));

export default function ButtonAppBar(side) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  function toggleDrawer(booleanValue) {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  return (
    <div className={classes.root}>
      <AppBar className={classes.root} position="static">
        <Toolbar>
          {isAuthenticated && (
            <>
              <Typography variant="h6" className={classes.title}>
                <Link className="Link" to="/">
                  Home
                </Link>
              </Typography>
              <Typography
                color="inherit"
                variant="h5"
                className={classes.title}
                style={{ color: 'black' }}
              >
                Blog and Brews
              </Typography>
            </>
          )}

          {!isAuthenticated && (
            <Button onClick={() => loginWithRedirect({})}>Log in</Button>
          )}

          {isAuthenticated && <Button onClick={() => logout()}>Log out</Button>}
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        onClose={handleDrawerClose}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'ltr' ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/brewery">Breweries in Texas</Link>
          </li>
          <li>
            <Link to="/beerhome">Beer Lists</Link>
          </li>
          <li>
            <Link to="/searchbrewery">Search Breweries in the US</Link>
          </li>
          <li>
            <Link to="/searchbeer">Brewdog Brewery Collection</Link>
          </li>
          <li>
            <Link to="/resources"> Resources</Link>
          </li>
          <li>
            <Link to="/reviews"> Reviews</Link>
          </li>
        </ul>
      </Drawer>
    </div>
  );
}

/*
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

const styles = {
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"
  },
  grow: {
    flexGrow: 1,
    color: "black"
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar className={classes.root} position="static">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="secondary"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" className={classes.grow}>
            <Link className="Link" to="/">
              <p>Home</p>
            </Link>
          </Typography>
          <Typography variant="h6" className={classes.grow}>
            <Link className="Link" to="/Beer">
              <p>Breweries in Texas</p>
            </Link>
          </Typography>
          <Typography variant="h6" className={classes.grow}>
            <Link className="Link" to="/SearchBeer">
              <p>Search Breweries in US</p>
            </Link>
          </Typography>
          <Typography variant="h6" className={classes.grow}>
            <Link className="Link" to="/SearchBeer2">
              <p>Search Beer 2</p>
            </Link>
          </Typography>

          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(ButtonAppBar);
*/
