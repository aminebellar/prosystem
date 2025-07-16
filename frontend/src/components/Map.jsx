import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css';
import L from 'leaflet';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const markerIcon = new L.Icon({
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

const Map = () => {
  const position = [33.596557, -7.595109]; // Coordonnées exactes
  const googleMapsUrl = `https://www.google.com/maps?q=${position[0]},${position[1]}`;

  return (
    <div className="prosystem-map">
      <MapContainer 
        center={position} 
        zoom={17}
        style={{ height: '400px', borderRadius: '8px' }}
        attributionControl={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position} icon={markerIcon}>
          <Popup>
            <strong>PROSYSTEM</strong><br/>
            13 Rue Rocroy, 7ème étage<br/>
             Bélvédère, Casablanca
          </Popup>
        </Marker>
      </MapContainer>

      <div className="prosystem-topbar">
  <div className="topbar-item">
    
    <FaMapMarkerAlt style={{ color: '#00aaff' }} />
    <a
      href="https://www.google.com/maps?q=33.596557,-7.595109"
      target="_blank"
      rel="noopener noreferrer"
    >
    <span><strong>13 Rue Rocroy 7ème étage, Bélvédère - Casablanca</strong></span>
    </a>
  </div>
  <div className="topbar-item">
    <FaEnvelope style={{ color: '#00aaff' }} />
    <a href="mailto:prosystem@prosystem.ma"><strong>prosystem@prosystem.ma</strong></a>
  </div>
  <div className="topbar-item">
    <FaPhone style={{ color: '#00aaff' }} />
    <a href="tel:0522240050"><strong>05222-40050</strong></a>
  </div>
</div>

    </div>
  );
};

export default Map;