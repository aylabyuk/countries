import { withRouter } from 'next/router'
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  continentName: {
    padding: theme.spacing.unit * 3,
    fontWeight: 300,
    fontSize: 45
  }
})

const Continent = withRouter(({ router, classes }) => {
    return (
      <Typography className={classes.continentName} color="textPrimary">{router.query.name}</Typography>
    )
  })

export default withStyles(styles)(Continent);
