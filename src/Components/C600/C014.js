import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "./C014.css";
import "leaflet/dist/leaflet.css";
import siteData from "../../sitedata.json";  // <-- load icons here
import cities from "../C1108.json";

const C014 = () => {
  const markerIcons = siteData.mapIcons || [];  // <-- array of marker images

  return (
    <div className="row">
      <div className="col">
        {cities.map((city, idx) => {
          // Create dynamic marker icon for each city
          const iconUrl = markerIcons[idx] ? `/${markerIcons[idx]}` : "/default-marker.png";
          const dynamicIcon = new L.Icon({
            iconUrl,
            iconSize: [40, 40], 
            iconAnchor: [17, 46],
            popupAnchor: [0, -46],
          });

          return (
            <Map 
              key={idx}   // <-- React needs this
              center={city.center} 
              zoom={city.zoomlevel}
            >
              <TileLayer
                url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=rurdVhluzyQimIQ3liOr"
                attribution='&copy; <a href="https://www.maptiler.com/">MapTiler</a> &copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker
                position={[city.lat, city.lng]}
                icon={dynamicIcon}  // <-- dynamic icon here
              >
                <Popup>
                  <b>{city.name},</b> <br />
                  {city.address}
                </Popup>
              </Marker>
            </Map>
          );
        })}
      </div>
    </div>
  );
};

export default C014;
