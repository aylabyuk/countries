import React, { useState } from 'react';
import createContainer from 'constate';
import { withRouter } from 'next/router'

const AppContainer = createContainer(( router ) => {
  // defaults
  const position = [[2.6138389710984824, 103.38134765625001], [21.555284406923192, 145.56884765625003]];
  const rootPath = [{name: 'Continents', path: '/'}]

  // map rect location
  const [mapPosition, setMapPosition] = useState(position);
  // path
  const [currentPath, setCurrentPath] = useState(rootPath);

  const changeContinent = ({ bbox, name }) => {
    setMapPosition([[bbox.north, bbox.east],[bbox.south, bbox.west]]);
    setCurrentPath([
      currentPath[0],
      { name, path: `continent?name=${name}` }
    ])
  }

  const backToRoot = () => {
    setCurrentPath(rootPath)
  }

  return {
    mapPosition,
    currentPath,
    changeContinent,
    backToRoot
  };  
});

export default withRouter(AppContainer)
