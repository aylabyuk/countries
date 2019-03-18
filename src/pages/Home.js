import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AppContainer from '../appContainer';
import geoUtils from '../utils/geonamesUtils';
import { Link } from 'react-router-dom';

const Home = () => {
  const [ continents, setContinents ] = useState([]);

  const fetchContinents = async () => {
    const res = await geoUtils.getContinents();
    setContinents(res);
  }

  useEffect(() => {
    fetchContinents();
  }, [])

  const { changeMapPosition } = useContext(AppContainer.Context);

  return (
    <List component="nav">
      {
        continents.map((cont) => {
          return (
            <Link
              key={cont.name}
              style={{ textDecoration: 'none' }}
              to={{ pathname: `/${cont.name}`, state: { continent: cont } }}
            >
              <ListItem button onClick={() => changeMapPosition(cont)}>
                <ListItemText primary={cont.name} />
              </ListItem>
            </Link>
          )
        })
      }
    </List>
  )
}

export default Home;
