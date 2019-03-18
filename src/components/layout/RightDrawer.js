import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import BCrumbs from './BCrumbs';
// import Loading from '../Loading';

const RightDrawer = ({classes, children}) => {
  return (
    <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="right"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
      <div className={classes.toolbar} />
      {/* <Loading /> */}
      <BCrumbs />
      { children }
    </Drawer>
  )
}

export default RightDrawer;