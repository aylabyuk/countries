import React, { useState } from 'react';
import createContainer from 'constate';

const AppContainer = createContainer(() => {
  const [mapPosition, setMapPosition] = useState({ lat: 51.505,lng:  -0.09 });

  const changeMapPosition = ({ lat, lng }) => setMapPosition({ lat, lng });

  return { 
    mapPosition,
    changeMapPosition
  };  
});

export default AppContainer;
