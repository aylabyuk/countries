import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import PeopleIcon from '@material-ui/icons/People';
import PlaceIcon from '@material-ui/icons/Place';
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import pink from '@material-ui/core/colors/pink';
import blue from '@material-ui/core/colors/blue';
import getSymbolFromCurrency from 'currency-symbol-map';

const styles = {
  greenAvatar: {
    color: '#fff',
    backgroundColor: green[500]
  },
  pinkAvatar: {
    color: '#fff',
    backgroundColor: pink[500]
  },
  blueAvatar: {
    color: '#fff',
    backgroundColor: blue[500]
  }
}

const CountryInfo = (props) => {

  const { capital, currencyCode, population, classes} = props;

  console.log(props)

  return (
    <List>
      <ListItem>
        <Avatar className={classes.greenAvatar}>
          <PlaceIcon />
        </Avatar>
        <ListItemText secondary="Capital" primary={capital} />
      </ListItem>
      <ListItem>
        <Avatar className={classes.pinkAvatar}>
          { getSymbolFromCurrency(currencyCode) }
        </Avatar>
        <ListItemText secondary="Currency" primary={currencyCode} />
      </ListItem>
      <ListItem>
        <Avatar className={classes.blueAvatar}>
          <PeopleIcon />
        </Avatar>
        <ListItemText secondary="Population" primary={population} />
      </ListItem>
    </List>
  );
}
 
export default withStyles(styles)(CountryInfo);