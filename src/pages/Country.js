import React, { useContext, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { graphql, compose } from 'react-apollo';
import { withStyles } from '@material-ui/core/styles';
import AppContainer from '../appContainer';

import GET_COUNTRY from '../graphql/queries/GET_COUNTRY';

const styles = theme => ({
  countryName: {
    padding: theme.spacing.unit * 3,
    fontWeight: 300,
    fontSize: 45
  }
})

const Country = ({ classes, location, cntry: { loading, country } }) => {
  const countryName = location.state ? location.state.country.countryName : location.pathname.split('/').pop();
  if (loading) return <div>loading..</div>

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
      <Typography className={classes.countryName} color="textPrimary">{countryName}</Typography>
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

