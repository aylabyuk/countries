import { useContext } from 'react';
import geoUtils from '../utils/geonamesUtils';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Link from 'next/link';

import AppContainer from '../state/AppContainer';

const IndexPage = (props) => {
  const { changeMapPosition } = useContext(AppContainer.Context);
  const { continents } = props;

  return (
    <List component="nav">
      {
        continents.map((cont) => {
          return (
            <Link key={cont.name} as={`/${cont.name}`} href={`/?continent=${cont.name}`}>
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

IndexPage.getInitialProps = async () => {
  const continents = await geoUtils.getContinents();
  return continents;
}

export default IndexPage;
