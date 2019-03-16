import Drawer from '@material-ui/core/Drawer';
import BCrumbs from './BCrumbs';

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
      <BCrumbs />
      { children }
    </Drawer>
  )
}

export default RightDrawer;