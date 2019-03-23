import React from 'react';
import { useContext } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AppContainer from '../appContainer';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-apollo-hooks';

import GET_CONTINENTS from '../graphql/queries/GET_CONTINENTS';

const Home = () => {
  const { data, error, loading } = useQuery(GET_CONTINENTS);

  if (loading) return <div>loading..</div>

  const { changeMapPosition } = useContext(AppContainer.Context);

  return (
    <List component="nav">
      {
        data.continents.map((cont) => {
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
