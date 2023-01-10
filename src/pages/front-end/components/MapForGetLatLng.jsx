import React, { useState } from 'react';
import { MapContainer, useMapEvents, TileLayer, Marker, Popup } from 'react-leaflet';

/*
Author : Arman Ali
Module: Zone
github: https://github.com/Arman-Arzoo
*/

function AddMarkerToClick({ latlng, setLatitude, setLongitude }) {
    const [markers, setMarkers] = useState(latlng);

    useMapEvents({
        click(e) {

            setMarkers([
                e.latlng.lat,
                e.latlng.lng
            ]);
            setLatitude(e.latlng.lat)
            setLongitude(e.latlng.lng)
        }
    })

    return (
        <>
            {
                <Marker
                    key={markers[0]}
                    position={markers}
                >
                    <Popup>Marker is at {markers}</Popup>
                </Marker>
            }
        </>
    )
}

const MapForGetLatLng = ({ latlng, setLatitude, setLongitude }) => {

    return (
        <>
            {
                <MapContainer
                    center={latlng}
                    zoom={6}
                    className="map_container"

                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <AddMarkerToClick latlng={latlng}
                        setLatitude={setLatitude}
                        setLongitude={setLongitude} />
                </MapContainer>

            }
        </>
    )
}

export default MapForGetLatLng
