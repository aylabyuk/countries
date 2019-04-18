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
          attribution='Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC'
          url="https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}"
        />
    </Map>
  )
}

export default LeafletMap;
