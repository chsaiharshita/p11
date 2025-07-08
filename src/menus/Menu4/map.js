import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "./map.css";
import "leaflet/dist/leaflet.css";
import imgmap from "../../images/marker.png";
import cities from "../../cities.json";

const markerIcon = new L.Icon({
  iconUrl: imgmap,
  iconSize: [40, 40],
  iconAnchor: [17, 46], //[left/right, top/bottom]
  popupAnchor: [0, -46], //[left/right, top/bottom]
});

const Contactmap = () => {
  return (
    <>
      <div className="row">
        <div className="col">
          {cities.map((city, idx) => (
            <Map center={city.center} zoom={city.zoomlevel}>
              <TileLayer
                url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=rurdVhluzyQimIQ3liOr"
                attribution='&copy; <a href="https://www.maptiler.com/">MapTiler</a> &copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker
                position={[city.lat, city.lng]}
                icon={markerIcon}
                key={idx}
              >
                <Popup>
                  <b>{city.name},</b> <br />
                  {city.address} 
                </Popup>
              </Marker>
            </Map>
          ))}
        </div>
      </div>
    </>
  );
};

export default Contactmap;
