import GoogleMapReact from 'google-map-react'
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
