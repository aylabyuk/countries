import { useContext } from 'react';
import geoUtils from '../utils/geonamesUtils';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import AppContainer from '../state/AppContainer';

const IndexPage = (props) => {
  const { changeMapPosition: change } = useContext(AppContainer.Context);
  const { continents } = props;
  console.log(props);

  return (
    <List component="nav">
      {
        continents.map((cont) => {
          return (
            <ListItem button key={cont.name}
              onClick={() => change({lat: cont.lat, lng: cont.lng})}
            >
              <ListItemText primary={cont.name} />
            </ListItem>
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
