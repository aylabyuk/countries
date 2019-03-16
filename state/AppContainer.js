import React, { useState } from 'react';
import createContainer from 'constate';

const AppContainer = createContainer(() => {
  const [mapPosition, setMapPosition] = useState([[2.6138389710984824, 103.38134765625001], [21.555284406923192, 145.56884765625003]]);

  const changeMapPosition = (bbox) => setMapPosition(
    [
      [bbox.north, bbox.east],
      [bbox.south, bbox.west],
    ]
  );

  return { 
    mapPosition,
    changeMapPosition
  };  
});

export default AppContainer;
