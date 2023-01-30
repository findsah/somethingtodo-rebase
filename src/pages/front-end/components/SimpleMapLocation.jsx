/* 
author: arman ali
github: https://github.com/Arman-Arzoo
whatsapp: +923430048341
*/
import React, { createRef } from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMapEvent } from 'react-leaflet'


const SimpleMapLocation = ({ latlng }) => {
    const mapRef = createRef();
    function MultipleMarkers() {
        const map = useMapEvent({
            click() {
                map.locate();
            },
        });
        {
            return (
                <Marker
                    // position={[13.3, 73.0]}
                    position={latlng ? latlng : [13.3, 73.0]}
                    key={"1"}>
                    <Popup >
                        <div className=''>
                            kjdlsjfldsk
                        </div>
                    </Popup>
                </Marker>
            )

        }
    }

    return (
        <MapContainer center={latlng ? latlng : [13.3, 73.0]} zoom={16} scrollWheelZoom={true}
            ref={mapRef}
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

export default SimpleMapLocation