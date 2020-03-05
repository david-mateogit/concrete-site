import React from "react";
import GoogleMapReact from "google-map-react";
import Pin from "../../images/icons/placeholder1.svg";

const isClient = typeof window !== "undefined";

const GoogleMap = () => {
  const address = {
    lng: -72.015979,
    lat: 41.522109,
  };
  const googleMapsApiKey = process.env.GATSBY_GOOGLE_MAPS_API;
  const { lat } = address;
  const { lng } = address;
  return (
    <section
      className="google-map"
      style={{ width: "100%", height: "500px", marginTop: "4rem" }}
    >
      <div className="map" style={{ height: "500px" }}>
        {isClient && (
          <GoogleMapReact
            bootstrapURLKeys={{ key: { googleMapsApiKey } }}
            defaultCenter={[lat, lng]}
            defaultZoom={9}
          >
            <div
              className="marker"
              lat={lat}
              lng={lng}
              style={{ height: "50px", width: "50px" }}
            >
              <Pin fill="red" width="30px" />
              RUTRA'S CONCRETE
            </div>
          </GoogleMapReact>
        )}
      </div>
    </section>
  );
};

export default GoogleMap;
