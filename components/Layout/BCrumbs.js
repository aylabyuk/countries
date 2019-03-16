import Breadcrumbs from '@material-ui/lab/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

const styles = theme => ({
  bcrumb: {
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`
  }
})

const BCrumbs = ({ classes }) => {
  return (
    <div className={classes.bcrumb}>
      <Breadcrumbs separator="›" arial-label="Breadcrumb">
        <Link color="inherit" href="/">
          Continents
        </Link>
        <Link color="inherit" href="/lab/about/">
          Lab
        </Link>
        <Typography color="textPrimary">Breadcrumb</Typography>
      </Breadcrumbs>
    </div>
  )
}

export default withStyles(styles)(BCrumbs);
