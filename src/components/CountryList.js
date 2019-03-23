import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ReactCountryFlag from "react-country-flag";
import { Link } from 'react-router-dom';

const CountryList = ({ countries }) => {
  return ( 
    <List component="nav">
      {
        countries.map((country) => {
          return (
            <Link
              key={country.countryName}
              style={{ textDecoration: 'none' }}
              to={{ pathname: `/${country.continentName}/${country.countryName}`, state: { country } }}
            >
              <ListItem button>
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