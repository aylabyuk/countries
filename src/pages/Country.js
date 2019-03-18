import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  countryName: {
    padding: theme.spacing.unit * 3,
    fontWeight: 300,
    fontSize: 45
  }
})

const Country = ({ classes, location }) => {
  console.log(location.state.country)
  console.log(location)
  return (
    <>
      <Typography className={classes.countryName} color="textPrimary">{location.state.country.countryName}</Typography>
    </>
  )
} 

export default withStyles(styles)(Country);
