/* 
author: arman ali
github: https://github.com/Arman-Arzoo
whatsapp: +923430048341
*/
import React, { createRef, useEffect, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMapEvent, useMap, useMapEvents } from 'react-leaflet'

const MapModal = ({ position, data }) => {

    const [positionLocate, setPositionLocate] = useState([51.505, -0.09])
    const mapRef = createRef();
    useEffect(() => {
        console.log(data)
        if (data) {
            const setposition = [data[0]?.geometry?.location?.lat(), data[0]?.geometry?.location?.lng()]
            setPositionLocate(setposition)
            // mapRef?.current?.flyTo(setposition || [51.505, -0.09])
        }
    }, [data])



    function MultipleMarkers() {
        const map = useMapEvent({
            click() {
                map.locate();
                map.flyTo(positionLocate, map.getZoom())
            },

        });

        {
            return data?.map((venue) => {

                return (
                    <Marker
                        // position={[51.507, -0.10]}
                        position={venue?.position || [venue?.geometry?.location?.lat(), venue?.geometry?.location?.lng()]}
                        key={venue?.id || venue?.place_id}>
                        <Popup>
                            {venue?.Title || venue?.name}
                        </Popup>
                    </Marker>
                )
            })
        }



    }

    return (
        <MapContainer center={positionLocate} zoom={13} scrollWheelZoom={true}
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

export default MapModal