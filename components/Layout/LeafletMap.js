import { useContext } from 'react';
import dynamic from 'next/dynamic';

import AppContainer from '../../state/AppContainer';

const Map = dynamic(() => import('react-leaflet/lib/Map'), {
  ssr: false
});

const TileLayer = dynamic(() => import('react-leaflet/lib/TileLayer'), {
  ssr: false
});


const LeafletMap = () => {
  const { mapPosition } = useContext(AppContainer.Context);

  return (
    <Map
      center={[mapPosition.lat, mapPosition.lng]}
      zoom={13}
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
