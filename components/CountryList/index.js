import { useContext } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Link from 'next/link';
import ReactCountryFlag from "react-country-flag";

import AppContainer from '../../state/AppContainer';

const CountryList = ({ countries }) => {
  const { changeMapPosition } = useContext(AppContainer.Context);

  console.log(countries)

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
            <Link key={country.countryName} href={`/continent/country?name=${country.continentName}&country=${country.countryName}`}>
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