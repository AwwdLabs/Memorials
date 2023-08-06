import { useState } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, useMap, Popup } from 'react-leaflet';

export function ChangeView({ coords }) {
  const map = useMap();
  map.setView(coords, 12);
  return null;
}

export default function Map() {
  const [geoData, setGeoData] = useState({ lat: 52.7657, lng: -1.2412 });

  const center = [geoData.lat, geoData.lng];

  return (
    <MapContainer center={center} zoom={12} style={{ height: '60vh', width: '100%' }} className='mb-10 rounded-md'>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
  
      <Marker position={center}>
        <Popup>
          <div>
            <h2>We are here</h2>
          </div>
        </Popup>
      </Marker>

      <ChangeView coords={center} />
    </MapContainer>
  );
}
