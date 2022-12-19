/* 
author: arman ali
github: https://github.com/Arman-Arzoo
whatsapp: +923430048341
*/
import React from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMapEvent, data } from 'react-leaflet'

const MapModal = ({ position }) => {

    const datademo = [{
        id: 1,
        Title: "map title",
        discription: "kjfklsdjf",
        position: [51.505, -0.09]
    },
    {
        id: 2,
        Title: "map title secode",
        discription: "kjfklsdjf",
        position: [51.507, -0.10]
    }
    ]
    function MultipleMarkers() {
        const map = useMapEvent({
            click() {
                map.locate();
            }
        });
        {
            return datademo?.map((venue) => {

                return (
                    <Marker position={venue?.position} key={venue?.id}>
                        <Popup>
                            {venue?.Title}
                        </Popup>
                    </Marker>
                )
            })
        }



    }

    return (
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}
            style={{
                width: "100%",
                height: "inherit"
            }}
        >
            <TileLayer
                attribution='&copy; <a href="https://github.com/Arman-Arzoo">Arman Ali</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MultipleMarkers />

        </MapContainer>
    )
}

export default MapModal