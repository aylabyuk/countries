import React, { useState } from 'react';
import createContainer from 'constate';

const AppContainer = createContainer(() => {
  // map rect location
  const [mapPosition, setMapPosition] = useState([[2.6138389710984824, 103.38134765625001], [21.555284406923192, 145.56884765625003]]);

  const changeMapPosition = (bbox) => setMapPosition(
    [[bbox.north, bbox.east],[bbox.south, bbox.west]]
  );

  // path
  const [currentPath, setCurrentPath] = useState(
    [
      {name: 'Continents', path: '/'},
      {name: 'Asia', path: '/continent?name=Asia'}
    ]
  );

  const changePath = (path) => setCurrentPath(path);

  return {
    mapPosition,
    changeMapPosition,
    currentPath,
    changePath
  };  
});

export default AppContainer;
