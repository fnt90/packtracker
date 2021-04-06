import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

export default function PackageItem({ parcel_id, status, eta, sender, 
  last_updated, notes, location_coordinate_latitude, location_coordinate_longitude, 
  location_name }) {
return (
  <div>
    <h3>Parcel ID: {parcel_id}</h3>
    <p><span>Status:</span> {status}</p>
    <p><span>ETA:</span> {eta}</p>
    <p><span>Sender:</span> {sender}</p>
    <p><span>Notes:</span> {notes} </p>
    <p>
      <span>Location:</span> {location_name} at {location_coordinate_latitude}, {location_coordinate_longitude}
    </p>
    <p><span>Last Updated:</span> {last_updated}</p>
    
    <MapContainer center={[location_coordinate_latitude, location_coordinate_longitude]} zoom={13} scrollWheelZoom={false}>
      <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
    </MapContainer>
  </div>
  );
}
