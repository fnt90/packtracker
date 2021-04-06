import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import DateTime from "./Readable";
import OrderStatus from "./OrderStatus"

export default function PackageItem({ parcel_id, status, eta, sender, 
  last_updated, notes, location_coordinate_latitude, location_coordinate_longitude, 
  location_name }) {
return (
  <div>
    <h3><i class="fas fa-box"></i> Parcel ID: {parcel_id}</h3>
    <p><span className="boldspan">Status:</span> <OrderStatus orderStatus={status} /></p>
    <p><span className="boldspan">ETA:</span>  <DateTime dateString={eta} /></p>
    <p><span className="boldspan">Sender:</span> {sender}</p>
    <p><span className="boldspan">Notes:</span> {notes != null ? ({notes}) : <span>none</span>} </p>
    <p>
      <span className="boldspan">Pickup Location:</span> {location_name} at {location_coordinate_latitude}, {location_coordinate_longitude}
    </p>
    <p><span className="boldspan">Last Updated:</span> <DateTime dateString={last_updated} /></p>
    
    <MapContainer center={[location_coordinate_latitude, location_coordinate_longitude]} zoom={13} scrollWheelZoom={false}>
      <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
    </MapContainer>
  </div>
  );
}
