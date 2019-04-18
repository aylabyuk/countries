import React, { useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import PeopleIcon from '@material-ui/icons/People';
import PlaceIcon from '@material-ui/icons/Place';
import LanguageIcon from '@material-ui/icons/Language';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { withStyles } from '@material-ui/core/styles';

import green from '@material-ui/core/colors/green';
import pink from '@material-ui/core/colors/pink';
import blue from '@material-ui/core/colors/blue';
import purple from '@material-ui/core/colors/purple';

const styles = theme => ({
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
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
  },
  purpleAvatar: {
    color: '#fff',
    backgroundColor: purple[500]
  }
})

const CountryInfo = (props) => {
  const [ showLangs, toggleShowLangs ] = useState(false)

  const { capital, currency, population, classes, languages} = props;

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
          { currency.symbol }
        </Avatar>
        <ListItemText secondary="Currency" primary={currency.code} />
      </ListItem>
      <ListItem>
        <Avatar className={classes.blueAvatar}>
          <PeopleIcon />
        </Avatar>
        <ListItemText secondary="Population" primary={population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} />
      </ListItem>
      <ListItem button onClick={() => toggleShowLangs(!showLangs)}>
        <Avatar className={classes.purpleAvatar}>
          <LanguageIcon />
        </Avatar>
        <ListItemText primary={languages.length + ' Language/s'} />
        {showLangs ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={showLangs} timeout="auto" unmountOnExit>
        {
          languages.map(l => (
            <List component="div" disablePadding>
              <ListItem className={classes.nested}>
                <ListItemText inset primary={`${l.name} (${l.code})`} />
              </ListItem>
            </List>
          ))
        }
      </Collapse>

    </List>
  );
}
 
export default withStyles(styles)(CountryInfo);