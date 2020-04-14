/*
import React, { useState } from 'react';
import classNames from 'classnames';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const styles = (theme) => ({
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
});

function Navigator(props) {
  const { classes, ...other } = props;

  return (
    <Drawer variant="persistent" {...other}>
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
  );
}

export default withStyles(styles)(Navigator);
*/