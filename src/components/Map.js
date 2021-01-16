import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
require ("dotenv").config();

const Map = ({ center, zoom, api_key }) => {
;
    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: api_key }}
                defaultCenter={ center }
                defaultZoom={ zoom }
            >
                <LocationMarker lat={center.lat} lng={center.lng} />
            </GoogleMapReact>
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: -33.8688,
        lng: 151.2093
    },
    zoom: 6,
    api_key: process.env.REACT_APP_API_KEY
}

export default Map
