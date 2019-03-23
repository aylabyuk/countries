import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import CountryList from '../components/CountryList';
import { useQuery } from 'react-apollo-hooks';

import GET_COUNTRIES from '../graphql/queries/GET_COUNTRIES';

const styles = theme => ({
  continentName: {
    padding: theme.spacing.unit * 3,
    fontWeight: 300,
    fontSize: 45
  }
})

const Continent = ({ classes, location }) => {
  const continentName = location.state ? location.state.continent.name : location.pathname.split('/').pop();

  const { data, error, loading } = useQuery(GET_COUNTRIES, {
    variables: {
      continentName,
    }
  });

  if (loading) return <div>loading..</div>

  return (
    <>
      <Typography className={classes.continentName} color="textPrimary">{continentName}</Typography>
      <CountryList countries={data.countries}/>
    </>
  )
}

export default withStyles(styles)(Continent);
