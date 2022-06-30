import React from "react";
import { MapContainer, TileLayer, useMap, Popup, Marker } from "react-leaflet";
import "./mapView.css";

const MapView = () => {
  const cordenadasSedeBarranquilla = [10.980304, -74.765846]
  const coordenadasCartagena = [10.387745, -75.506526]
  return (
    <div id="ubiquenos">
    <h1 className="title-map">Sede Barranquilla</h1>
    <MapContainer
        center={cordenadasSedeBarranquilla}
        zoom={20}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={cordenadasSedeBarranquilla}>
          <Popup>
          Cra. 42 #4-52<br /> Barranquilla, Atlántico
          </Popup>
        </Marker>
      </MapContainer>

      <h1 className="title-map">Sede Cartagena</h1>
      <MapContainer
        center={coordenadasCartagena}
        zoom={20}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={coordenadasCartagena}>
          <Popup>
          Tv. 54 #28-25 <br /> Cartagena de Indias, Bolivar
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapView;
