import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationInfoBox from './LocationInfoBox'
require ("dotenv").config();

const Map = ({ eventData, center, zoom, api_key }) => {
    const [LocationInfo, setLocationInfo] = useState(null)

    const markers = eventData.map((ev, index) => {
        if(ev.categories[0].id === 8) {
            return <LocationMarker key={index} lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title })} />
        }
        return null
    })

    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: api_key }}
                defaultCenter={ center }
                defaultZoom={ zoom }
            >
                {markers}
            </GoogleMapReact>
            {LocationInfo && <LocationInfoBox info={LocationInfo} />}
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
