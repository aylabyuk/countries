import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import geoUtils from '../utils/geonamesUtils';
// import geoUtils from '../../utils/geonamesUtils';
import CountryList from '../components/CountryList';

const styles = theme => ({
  continentName: {
    padding: theme.spacing.unit * 3,
    fontWeight: 300,
    fontSize: 45
  }
})

const Continent = ({ classes, location }) => {
  const [ countries, setCountries ] = useState([]);
  const continentName = location.state.continent.name;

  const fetchCountries = async () => {
    const res = await geoUtils.getCountriesByContinentName(continentName);
    setCountries(res);
  }

  useEffect(() => {
    fetchCountries();
  }, [])

  return (
    <>
      <Typography className={classes.continentName} color="textPrimary">{location.state.continent.name}</Typography>
      <CountryList countries={countries}/>
    </>
  )
}

export default withStyles(styles)(Continent);
