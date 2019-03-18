import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
// import geoUtils from '../../utils/geonamesUtils';
// import CountryList from '../../components/CountryList';

const styles = theme => ({
  continentName: {
    padding: theme.spacing.unit * 3,
    fontWeight: 300,
    fontSize: 45
  }
})

const Continent = ({ classes, location }) => {
  return (
    <>
      <Typography className={classes.continentName} color="textPrimary">{location.state.continent.name}</Typography>
      {/* <CountryList countries={countries}/> */}
    </>
  )
}

// Continent.getInitialProps = async (context) => {
//   const continents = await geoUtils.getContinents();

//   const continentInfo = continents.filter((continent) => {
//     return continent.name === context.query.name;
//   })

//   const countries = await geoUtils.getCountriesByContinentName(continentInfo[0].name);

//   return {continent: continentInfo[0], countries};
// }

export default withStyles(styles)(Continent);
