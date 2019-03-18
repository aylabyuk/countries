import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AppContainer from '../appContainer';
import geoUtils from '../utils/geonamesUtils';

const IndexPage = () => {
  const [ continents, setContinents ] = useState([]);

  useEffect(async () => {
    setContinents(await geoUtils.getContinents())
  }, [])

  const { changeMapPosition } = useContext(AppContainer.Context);

  return (
    <List component="nav">
      {
        continents.map((cont) => {
          return (
            // <Link key={cont.name} href={`/continent?name=${cont.name}`}>
              <ListItem button onClick={() => changeMapPosition(cont)}>
                <ListItemText primary={cont.name} />
              </ListItem>
            // </Link>
          )
        })
      }
    </List>
  )
}

export default IndexPage;
