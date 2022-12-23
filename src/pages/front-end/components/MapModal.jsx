/* 
author: arman ali
github: https://github.com/Arman-Arzoo
whatsapp: +923430048341
*/
import React, { createRef, useEffect, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMapEvent, useMap, useMapEvents } from 'react-leaflet'
import dummy from '../../../assets/dummy1.png'

const MapModal = ({ position, data, setAddedVenues, addedVenues }) => {

    const [positionLocate, setPositionLocate] = useState([51.505, -0.09])
    const mapRef = createRef();

    // add venue
    const addVenueAction = (item) => {

        setAddedVenues((prevState) => [...prevState, item])
    }

    const addedVenueId = addedVenues?.map((venue) => {
        return venue?.id || venue?.place_id
    })


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
                        <Popup className='map_venue_list' >
                            {/* {venue?.Title || venue?.name}
                             */}

                            <img src={venue?.photos[0]?.getUrl() || dummy} alt="" />
                            <h5 >{venue?.Title || venue?.name}</h5>
                            {/* <p className='p_gray_10 '>
                                {
                                    venue?.Description?.length > 230 ?
                                        venue?.Description?.substring(0, 230) + "..."
                                        : venue?.Description?.substring(0, 230)
                                        || venue?.vicinity
                                }
                            </p> */}
                            <div className='btn-container'>
                                <button className='btn_secondary ' onClick={() => {
                                    addVenueAction(venue)

                                }}
                                    style={{
                                        background: addedVenueId?.includes(venue?.id || venue?.place_id) ? 'green' : '',
                                        opacity: addedVenueId?.includes(venue?.id || venue?.place_id) ? '0.45' : ''
                                    }}
                                    disabled={addedVenueId?.includes(venue?.id || venue?.place_id)}
                                >
                                    <i className="fa fa-plus" aria-hidden="true"></i>
                                    ADD  VENUE
                                </button>
                            </div>


                        </Popup>
                    </Marker>
                )
            })
        }



    }

    return (
        <MapContainer center={positionLocate} zoom={16} scrollWheelZoom={true}
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