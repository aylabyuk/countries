import Drawer from '@material-ui/core/Drawer';

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
      { children }
    </Drawer>
  )
}

export default RightDrawer;