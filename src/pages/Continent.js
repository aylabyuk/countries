import React, { useEffect, useContext } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import CountryList from '../components/CountryList';
import { graphql, compose } from 'react-apollo';
import AppContainer from '../appContainer';

import GET_COUNTRIES from '../graphql/queries/GET_COUNTRIES';
import GET_CONTINENT from '../graphql/queries/GET_CONTINENT';

const styles = theme => ({
  continentName: {
    padding: theme.spacing.unit * 3,
    fontWeight: 300,
    fontSize: 45
  }
})

const Continent = ({ classes, location, counts: { loading, countries }, cont: { continent, loadingCont } }) => {
  const browserPath = location.pathname.split('/');
  const continentName = location.state ? location.state.continent.name : browserPath[1];

  if (loading || loadingCont) return <div>loading..</div>

  const { changeMapPosition } = useContext(AppContainer.Context);

  useEffect(() => {
    return changeMapPosition(continent);
  }, [continentName]);

  return (
    <>
      <Typography className={classes.continentName} color="textPrimary">{continentName}</Typography>
      <CountryList countries={countries}/>
    </>
  )
}

export default compose(
  withStyles(styles),
  graphql(GET_COUNTRIES, {
    name: 'counts',
    options: (props) => ({
      variables: {
        continentName: props.location.pathname.split('/')[1]
      }
    })
  }),
  graphql(GET_CONTINENT, {
    name: 'cont',
    options: (props) => ({
      variables: {
        continentName: props.location.pathname.split('/')[1]
      }
    })
  })
)(Continent)
