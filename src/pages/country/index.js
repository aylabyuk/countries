import React, { useContext, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { graphql, compose } from 'react-apollo';
import { withStyles } from '@material-ui/core/styles';
import ReactCountryFlag from "react-country-flag";
import Paper from '@material-ui/core/Paper';

import AppContainer from '../../appContainer';
import Loading from '../../components/Loading';
import CountryInfo from './CountryInfo';
import GET_COUNTRY from '../../graphql/queries/GET_COUNTRY';

const styles = theme => ({
  countryName: {
    padding: theme.spacing.unit * 3,
    paddingTop: 0,
    fontWeight: 'initial',
    fontSize: 20,
    textAlign: 'center'
  },
  flagContainer: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 10
  },
  cont: {
    margin: 10
  }
})

const Country = ({ classes, location, cntry: { loading, country } }) => {
  if (loading) return <Loading />

  const { changeMapPosition } = useContext(AppContainer.Context);

  useEffect(() => {
    const bbox = {
      north: country.north,
      east: country.east,
      west: country.west,
      south: country.south
    }

    return changeMapPosition({ bbox });
  }, [country]);

  return (
    <>
      <Paper className={classes.cont}>
        <div className={classes.flagContainer}>
          <ReactCountryFlag
            styleProps={{
              width: '150px',
              height: '112.5px',
              border: '#ababab solid 1px'
            }}
            code={country.countryCode}
            svg
          />
        </div>
        <Typography className={classes.countryName} color="textPrimary">{country.countryName}</Typography>
      </Paper>
      <CountryInfo { ...country } />
    </>
  )
} 

export default compose(
  withStyles(styles),
  graphql(GET_COUNTRY, {
    name: 'cntry',
    options: (props) => ({
      variables: {
        continentName: props.location.pathname.split('/')[1],
        countryName: props.location.pathname.split('/')[2],
      }
    })
  })
)(Country);

