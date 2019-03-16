import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Link from 'next/link';

const CountryList = ({ countries }) => {
  console.log(countries)
  return ( 
    <List component="nav">
      {
        countries.map((country) => {
          return (
            <Link key={country.countryName} href={`/continent/country?name=${country.continentName}&country=${country.countryName}`}>
              <ListItem button>
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