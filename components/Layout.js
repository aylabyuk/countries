import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Header from "./Header";
import LeafletMap from './LeafletMap'
import RightDrawer from "./RightDrawer";

const styles = theme => ({
  root: {
    width: '100%'
  },
  leafletMap: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
})

const Layout = ({ children, classes }) => {
  return (
    <div className={classes.root}>
      <Header />
      <RightDrawer />
      <main className={classes.leafletMap}>
        <LeafletMap />
      </main>
      {/* {children} */}
    </div>
  )
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Layout);