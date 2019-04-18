import React, { useEffect, useContext } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import CountryList from '../components/CountryList';
import { graphql, compose } from 'react-apollo';
import AppContainer from '../appContainer';
import Loading from '../components/Loading';

import GET_COUNTRIES from '../graphql/queries/GET_COUNTRIES';
import GET_CONTINENT from '../graphql/queries/GET_CONTINENT';

const styles = theme => ({
  continentName: {
    padding: theme.spacing.unit * 3,
    fontWeight: 'initial',
    fontSize: 50,
    textAlign: 'center'
  }
})

const Continent = ({ classes, location, counts: { loading, countries }, cont: { continent, loadingCont } }) => {
  if (loading || loadingCont) return <Loading />

  const { changeMapPosition } = useContext(AppContainer.Context);

  useEffect(() => {
    return changeMapPosition(continent);
  }, [continent.name]);

  return (
    <>
      <Typography className={classes.continentName} color="textPrimary">{continent.name}</Typography>
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
