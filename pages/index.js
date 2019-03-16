import { useContext } from 'react';
import geoUtils from '../utils/geonamesUtils';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Link from 'next/link';

import AppContainer from '../state/AppContainer';

const IndexPage = (props) => {
  const { changeContinent } = useContext(AppContainer.Context);
  const { continents } = props;

  return (
    <List component="nav">
      {
        continents.map((cont) => {
          return (
            <Link href={`/continent?name=${cont.name}`} key={cont.name}>
              <ListItem button onClick={() => changeContinent(cont)}>
                <ListItemText primary={cont.name} />
              </ListItem>
            </Link>
          )
        })
      }
    </List>
  )
}

IndexPage.getInitialProps = async () => {
  const continents = await geoUtils.getContinents();
  return continents;
}

export default IndexPage;
