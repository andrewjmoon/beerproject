import React from 'react';
import AppBar from '@material-ui/core/AppBar';
//import Avatar from "@material-ui/core/Avatar";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
//import HelpIcon from "@material-ui/icons/Help";
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
//import NotificationsIcon from "@material-ui/icons/Notifications";
//import Tab from "@material-ui/core/Tab";
//import Tabs from "@material-ui/core/Tabs";
import Toolbar from '@material-ui/core/Toolbar';
//import Tooltip from "@material-ui/core/Tooltip";
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { useAuth0 } from '../react-auth0-wrapper';

const lightColor = 'rgba(255, 255, 255, 0.7)';

const styles = theme => ({
  secondaryBar: {
    zIndex: 0
  },
  menuButton: {
    marginLeft: -theme.spacing.unit
  },
  iconButtonAvatar: {
    padding: 4
  },
  link: {
    textDecoration: 'none',
    listStyleType: 'none',
    overflow: 'hidden',
    color: lightColor,
    '&:hover': {
      color: theme.palette.common.white
    }
  },
  button: {
    borderColor: lightColor,
    lineSpacing: 1,
    color: 'black'
  }
});

function Header(props) {
  const { classes, onDrawerToggle } = props;
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <React.Fragment>
      <AppBar
        style={{ backgroundColor: 'orange' }}
        position="sticky"
        elevation={0}
      >
        <Toolbar>
          <Grid container spacing={8} alignItems="center">
            <Hidden smUp>
              <Grid item>
                <IconButton
                  color="inherit"
                  aria-label="Open drawer"
                  onClick={onDrawerToggle}
                  className={classes.menuButton}
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
            </Hidden>
            <Grid item xs />
            <Grid item>
              {!isAuthenticated && (
                <Button onClick={() => loginWithRedirect({})}>Log in</Button>
              )}

              {isAuthenticated && (
                <Button onClick={() => logout()}>Log out</Button>
              )}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar
        component="div"
        className={classes.secondaryBar}
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
                color="black"
                size="small"
                float="right"
                line-spacing="0.5"
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
                color="black"
                size="small"
                float="right"
                line-spacing="0.5"
              >
                <Link className="Link" to="/about">
                  About Menu
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
          <Link variant="outlined" className="Menu" to="/brewery">
            Breweries in Texas
          </Link>
          <Link variant="outlined" className="Menu" to="/beerhome">
            Beer Lists
          </Link>
          <Link variant="outlined" className="Menu" to="/searchbrewery">
            Search Breweries in the US
          </Link>
          {'   '}
          <Link variant="outlined" className="Menu" to="/searchbeer">
            Brewdog Brewery Collection
          </Link>
          <Link variant="outlined" className="Menu" to="/searchstyles">
            Search Beer Styles
          </Link>
          {'   '}
          <Link variant="outlined" className="Menu" to="/resources">
            {' '}
            Resources
          </Link>
          <Link variant="outlined" className="Menu" to="/reviews">
            {' '}
            Reviews
          </Link>
        </ul>
      </AppBar>
    </React.Fragment>
  );
}

export default withStyles(styles)(Header);
