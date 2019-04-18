import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import PeopleIcon from '@material-ui/icons/People';
import WorkIcon from '@material-ui/icons/Work';
import PlaceIcon from '@material-ui/icons/Place';

const CountryInfo = (props) => {

  const { capital, currencyCode, population } = props;

  console.log(props)

  return (
    <List>
      <ListItem>
        <Avatar>
          <PlaceIcon />
        </Avatar>
        <ListItemText primary="Capital" secondary={capital} />
      </ListItem>
      <ListItem>
        <Avatar>
          <WorkIcon />
        </Avatar>
        <ListItemText primary="Currency" secondary={currencyCode} />
      </ListItem>
      <ListItem>
        <Avatar>
          <PeopleIcon />
        </Avatar>
        <ListItemText primary="Population" secondary={population} />
      </ListItem>
    </List>
  );
}
 
export default CountryInfo;