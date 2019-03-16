import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import LeafletMap from './LeafletMap';
import RightDrawer from './RightDrawer';
import SearchAppBar from './SearchAppBar';

const drawerWidth = 400;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    [theme.breakpoints.down('sm')]: {
      width: '100vw',
    },
  },
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.down('sm')]: {
      width: '100vw',
    },
  },
  content: {
    flexGrow: 1,
  },
  toolbar: theme.mixins.toolbar,
});

const Layout = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <SearchAppBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <LeafletMap />
      </main>
      <RightDrawer {...props} />
    </div>
  );
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Layout);