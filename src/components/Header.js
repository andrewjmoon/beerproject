import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
//import Avatar from "@material-ui/core/Avatar";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
//import HelpIcon from "@material-ui/icons/Help";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
//import NotificationsIcon from "@material-ui/icons/Notifications";
//import Tab from "@material-ui/core/Tab";
//import Tabs from "@material-ui/core/Tabs";
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { useAuth0 } from '../react-auth0-wrapper';

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E20 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 60,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 3,
    color: 'black',
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: 'lightblue',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  categoryHeader: {
    paddingTop: 16,
    paddingBottom: 16,
  },
  categoryHeaderPrimary: {
    color: theme.palette.common.white,
  },
  item: {
    textDecoration: `none`,
    textAlign: `center`,
    paddingTop: 4,
    paddingBottom: 4,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  itemCategory: {
    backgroundColor: '#232f3e',
    boxShadow: '0 -1px 0 #404854 inset',
    paddingTop: 16,
    paddingBottom: 16,
  },
  firebase: {
    fontSize: 24,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.common.white,
  },
  itemActionable: {
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
    },
  },
  itemActiveItem: {
    color: '#4fc3f7',
  },
  itemPrimary: {
    color: 'inherit',
    fontSize: theme.typography.fontSize,
    '&$textDense': {
      fontSize: theme.typography.fontSize,
    },
  },
  textDense: {},
  divider: {
    marginTop: theme.spacing(2),
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  function toggleDrawer(booleanValue) {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  return (
    <React.Fragment>
      <AppBar
        style={{ backgroundColor: 'orange' }}
        position="sticky"
        elevation={0}
      >
        <Toolbar>
          <Grid container spacing={8} alignItems="center">
            <Grid item xs />
            <Grid item>
              {!isAuthenticated && (
                <Button onClick={() => loginWithRedirect({})}>Log in</Button>
              )}

              {isAuthenticated && (
                <Button onClick={() => logout()}>Log out</Button>
              )}
            </Grid>
            <Grid item>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={toggleDrawer}
                className={classes.menuButton}
              >
                <MenuIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar
        component="div"
        className={classes.title}
        style={{ backgroundColor: 'orange' }}
        position="static"
        elevation={0}
      >
        <Toolbar>
          <Grid container alignItems="center" spacing={8}>
            <Grid item xs>
              <Typography style={{ color: 'black' }} variant="h4">
                Blog and Brews
              </Typography>
            </Grid>
            <Grid item>
              <Button
                className={classes.button}
                variant="outlined"
                color="primary"
                size="small"
                float="right"
              >
                <Link className="Link" to="/">
                  Home Menu
                </Link>
              </Button>
            </Grid>
            <Grid item>
              <Button
                className={classes.button}
                variant="outlined"
                color="primary"
                size="small"
                float="right"
              >
                <Link className="Link" to="/about">
                  About Menu
                </Link>
              </Button>
            </Grid>
            <Grid item>
              <Button
                className={classes.button}
                variant="outlined"
                color="primary"
                size="small"
                float="right"
              >
                <Link className="Link" to="/resources">
                  Resources
                </Link>
              </Button>
            </Grid>
            <Grid item>
              <Button
                className={classes.button}
                variant="outlined"
                color="primary"
                size="small"
                float="right"
              >
                <Link className="Link" to="/reviews">
                  Reviews
                </Link>
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <AppBar
        component="div"
        style={{ backgroundColor: 'orange' }}
        className={classes.secondaryBar}
        position="static"
        elevation={0}
      >
        <ul>
          <Link variant="outlined" className={classes.title} to="/brewery">
            Breweries in Texas
          </Link>
          {'   '}
          {'   '}
          <Link variant="outlined" className={classes.title} to="/beerhome">
            Beer Lists
          </Link>
          {'   '}
          {'   '}
          <Link
            variant="outlined"
            className={classes.title}
            to="/searchbrewery"
          >
            Search Breweries in the US
          </Link>
          {'   '}
          {'   '}
          <Link variant="outlined" className={classes.title} to="/searchbeer">
            Brewdog Brewery Collection
          </Link>
          {'   '}
          {'   '}
          <Link variant="outlined" className={classes.title} to="/searchstyles">
            Search Beer Styles
          </Link>
          {'   '}
          {'   '}
        </ul>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        onClose={handleDrawerClose}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'ltr' ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
        <List disablePadding>
          <ListItem
            className={classNames(
              classes.firebase,
              classes.item,
              classes.itemCategory
            )}
          >
            Side Bar
          </ListItem>
          <Divider />
          <ListItem className={classNames(classes.item, classes.itemCategory)}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>
              <Link
                className={classNames(classes.item)}
                color="white"
                variant="contained"
                size="large"
                to="/"
              >
                Home Menu
              </Link>
            </ListItemText>
          </ListItem>
          <ListItemText
            className={classNames(
              classes.itemPrimary,
              classes.item,
              classes.itemCategory
            )}
          >
            <Link
              className={classNames(classes.item)}
              color="white"
              variant="contained"
              size="large"
              to="/about"
            >
              About
            </Link>
          </ListItemText>
          <ListItemText
            className={classNames(
              classes.itemPrimary,
              classes.item,
              classes.itemCategory
            )}
          >
            <Link
              className={classNames(classes.item)}
              color="white"
              variant="contained"
              size="large"
              to="/brewery"
            >
              Breweries in Texas
            </Link>
          </ListItemText>
          <ListItemText
            className={classNames(
              classes.itemPrimary,
              classes.item,
              classes.itemCategory
            )}
          >
            <Link
              className={classNames(classes.item)}
              color="white"
              variant="contained"
              size="large"
              to="/beerhome"
            >
              Beer Lists
            </Link>
          </ListItemText>

          <ListItemText
            className={classNames(classes.item, classes.itemCategory)}
          >
            <Link
              className={classNames(classes.item)}
              color="white"
              variant="contained"
              size="large"
              to="/searchbrewery"
            >
              Search Breweries in the US
            </Link>
          </ListItemText>
          <ListItemText
            className={classNames(classes.item, classes.itemCategory)}
          >
            <Link
              className={classNames(classes.item)}
              color="white"
              variant="contained"
              size="large"
              to="/searchbeer"
            >
              Brewdog Brewery Collection
            </Link>
          </ListItemText>
          <ListItemText
            className={classNames(classes.item, classes.itemCategory)}
          >
            <Link
              className={classNames(classes.item)}
              color="white"
              variant="contained"
              size="large"
              to="/searchstyles"
            >
              Search Beer Styles
            </Link>
          </ListItemText>
          <ListItemText
            className={classNames(classes.item, classes.itemCategory)}
          >
            <Link className={classNames(classes.item)} to="/resources">
              Resources
            </Link>
          </ListItemText>
          <ListItemText
            className={classNames(classes.item, classes.itemCategory)}
          >
            <Link className={classNames(classes.item)} to="/reviews">
              {' '}
              Reviews
            </Link>
          </ListItemText>
        </List>
      </Drawer>
    </React.Fragment>
  );
}
