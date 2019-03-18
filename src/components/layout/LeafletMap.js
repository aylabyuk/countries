import React from 'react';
import { useContext } from 'react';
import Map from 'react-leaflet/lib/Map';
import TileLayer from 'react-leaflet/lib/TileLayer';

import AppContainer from '../../appContainer';

const LeafletMap = () => {
  const { mapPosition } = useContext(AppContainer.Context);

  return (
    <Map
      bounds={mapPosition}
      style={{ height: 'calc(100vh - 64px)' }}
      animate={true}
    >
      <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
    </Map>
  )
}

export default LeafletMap;
