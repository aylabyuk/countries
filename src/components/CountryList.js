import React, { useContext } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ReactCountryFlag from "react-country-flag";
import { Link } from 'react-router-dom';
import AppContainer from '../appContainer';

const CountryList = ({ countries }) => {
  const { changeMapPosition } = useContext(AppContainer.Context);

  return ( 
    <List component="nav">
      {
        countries.map((country) => {
          const { north, east, south, west } = country;
          const bbox = {
            north,
            east,
            south,
            west
          }

          return (
            <Link
              key={country.countryName}
              style={{ textDecoration: 'none' }}
              to={{ pathname: `/${country.continentName}/${country.countryName}`, state: { country } }}
            >
              <ListItem button onClick={() => changeMapPosition({ bbox })}>
                <ReactCountryFlag code={country.countryCode} svg />
                <ListItemText primary={country.countryName} />
              </ListItem>
            </Link>
          )
        })
      }
    </List>
  );
}
 
export default CountryList;