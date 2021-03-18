import React from 'react';
import GoogleMapReact from 'google-map-react';

const Map = (props) => {

    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
            bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
            defaultCenter={props.center}
            defaultZoom={props.zoom}
            >
            <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text="My Marker"
            />
            </GoogleMapReact>
        </div>
    )
}

export default Map;

Map.defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };