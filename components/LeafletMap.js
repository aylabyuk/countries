import dynamic from 'next/dynamic';

const Map = dynamic(() => import('react-leaflet/lib/Map'), {
  ssr: false
});

const TileLayer = dynamic(() => import('react-leaflet/lib/TileLayer'), {
  ssr: false
});


const LeafletMap = () => {
  const mypos = {
    lat: 51.505,
    lng: -0.09,
    zoom: 13,
  }

  return (
    <Map center={[mypos.lat, mypos.lng]} zoom={mypos.zoom} style={{ height: 'calc(100vh - 64px)' }}>
      <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
    </Map>
  )
}

export default LeafletMap;
