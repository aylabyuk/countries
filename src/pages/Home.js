import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo';
import Loading from '../components/Loading';

import GET_CONTINENTS from '../graphql/queries/GET_CONTINENTS';

const Home = ({ conts: { loading, continents } }) => {
  if (loading) return <Loading />
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
              <ListItem button>
                <ListItemText primary={cont.name} />
              </ListItem>
            </Link>
          )
        })
      }
    </List>
  )
}

export default graphql(GET_CONTINENTS, {
  name: 'conts'
})(Home);
