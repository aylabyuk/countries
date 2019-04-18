import React, { useContext, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { graphql, compose } from 'react-apollo';
import { withStyles } from '@material-ui/core/styles';
import ReactCountryFlag from "react-country-flag";

import AppContainer from '../appContainer';
import Loading from '../components/Loading';
import GET_COUNTRY from '../graphql/queries/GET_COUNTRY';

const styles = theme => ({
  countryName: {
    padding: theme.spacing.unit * 3,
    fontWeight: 300,
    fontSize: 45
  },
  flagContainer: {
    display: 'flex',
    justifyContent: 'center',
    margin: '10px auto 10px auto',
    padding: '0px 10px 0px 10px'
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
      <Paper className={classes.flagContainer}>
        <ReactCountryFlag
          styleProps={{
            width: '100px',
            height: '100px'
          }}
          code={country.countryCode}
          svg
        />
      </Paper>
      <Typography className={classes.countryName} color="textPrimary">{country.countryName}</Typography>
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

