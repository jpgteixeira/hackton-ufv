"use client";
import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function MapLeaflet() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Se ainda não montou, não renderiza nada (ou um loading)
  if (!isMounted) return <div style={{ height: "400px" }}>Carregando mapa...</div>;

  return (
    <MapContainer 
      center={[-20.7635, -42.8676]} 
      zoom={15} 
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[-20.7635, -42.8676]} icon={customIcon}>
        <Popup>IDATA - UFV</Popup>
      </Marker>
    </MapContainer>
  );
}