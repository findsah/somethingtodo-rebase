/* 
author: arman ali
github: https://github.com/Arman-Arzoo
whatsapp: +923430048341
*/
import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const MapModal = ({ position }) => {

    return (
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}
            style={{
                width: "100%",
                height: "inherit"
            }}
        >
            <TileLayer
                attribution='&copy; <a href="https://github.com/Arman-Arzoo">Arman Ali</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default MapModal