import { withRouter } from 'next/router'
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  countryName: {
    padding: theme.spacing.unit * 3,
    fontWeight: 300,
    fontSize: 45
  }
})

const Country = withRouter(({ router, classes }) => {
    return (
      <Typography className={classes.countryName} color="textPrimary">{router.query.country}</Typography>
    )
  })

export default withStyles(styles)(Country);
