import React from "react";
import GoogleMapReact from "google-map-react";
import Pin from "../../images/icons/placeholder1.svg";

const isClient = typeof window !== "undefined";

const GoogleMap = props => {
  // const { address, googleMapsApiKey } = props;
  const address = {
    lng: -71.9919405,
    lat: 41.516539,
  };
  const googleMapsApiKey = "AIzaSyBdFEWsOANfs98w3E8gRjUoTx8zhHGij2k";
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
            bootstrapURLKeys={{ key: googleMapsApiKey }}
            defaultCenter={[lat, lng]}
            defaultZoom={7}
          >
            <div
              className="marker"
              lat={lat}
              lng={lng}
              style={{ height: "50px", width: "50px" }}
            >
              <Pin fill="red" width="30px" />
            </div>
          </GoogleMapReact>
        )}
      </div>
    </section>
  );
};

export default GoogleMap;
