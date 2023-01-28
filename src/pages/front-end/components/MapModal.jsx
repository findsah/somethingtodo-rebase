/* 
author: arman ali
github: https://github.com/Arman-Arzoo
whatsapp: +923430048341
*/
import React, { createRef, useEffect, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMapEvent, useMap, useMapEvents } from 'react-leaflet'
import dummy from '../../../assets/dummy1.png'
import { iconBlue, iconGreen } from '../../../assets/leftletIcon/icon'

const MapModal = ({ position, data, setAddedVenues, addedVenues, keyword, catogory, distance }) => {


    const [positionLocate, setPositionLocate] = useState([51.505, -0.09])
    const mapRef = createRef();

    // add venue
    const addVenueAction = (item) => {
        const data = {
            google_place_id: item?.google_google_place_id,
            images: "",
            imageUrl: "",
            description: item?.description,
            name: item?.venue_name,
            location: {
                lat: item?.location?.lat,
                lng: item?.location?.lng,
            },
            city: "",
            street: "",
            building: "",
            phoneNumber: "",
            website: '',
            isPravite: "",
            previewImage: []
        }

        // setAddedVenues((prevState) => [...prevState, item])
        setAddedVenues((prevState) => [...prevState, data])
    }

    const addedVenueId = addedVenues?.map((venue) => {
        return venue?.id || venue?.google_place_id
    })

    // zoom level control
    let zoom = 12;

    if (distance === '1km') {
        zoom = 16
    } else if (distance === "5km") {
        zoom = 16
    }
    else if (distance === "25km") {
        zoom = 16
    }
    else if (distance === "50km") {
        zoom = 10
    }
    else if (distance === "75km") {
        zoom = 8
    }
    else if (distance === "100km") {
        zoom = 6
    }




    useEffect(() => {

        if (data?.data.length > 0 && data[0]?.location?.lat) {
            const setposition = [data[0]?.location?.lat, data[0]?.location?.lng]
            setPositionLocate(setposition)
            // mapRef?.current?.flyTo(setposition || [51.505, -0.09])
        }
    }, [data])



    function MultipleMarkers() {
        const map = useMapEvent({
            click() {
                map.locate();
                // map.flyTo(positionLocate, map.getZoom())
            },


        });

        map.flyTo(position, map.getZoom())
        mapRef?.current?.map.setZoom(zoom)



        {
            return data?.data?.filter(entry => Object?.values(entry)?.some(val => typeof val === "string" && val?.match(keyword)))
                ?.map((venue) => {

                    const checkposition = venue?.location?.lat ? [venue?.location?.lat, venue?.location?.lng] : position


                    return (
                        <Marker
                            position={venue?.position || checkposition}
                            // position={[venue?.location?.lat, venue?.location?.lng]}
                            icon={addedVenueId?.includes(venue?.id || venue?.google_place_id) ? iconGreen : iconBlue}
                            key={venue?.id || venue?.google_place_id}>
                            <Popup className='map_venue_list' >
                                <img src={venue?.image || dummy} alt="" />
                                <h5 >{venue?.Title || venue?.venue_name}</h5>
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
                                            background: addedVenueId?.includes(venue?.id || venue?.google_place_id) ? 'green' : '',
                                            opacity: addedVenueId?.includes(venue?.id || venue?.google_place_id) ? '0.4' : ''
                                        }}
                                        disabled={addedVenueId?.includes(venue?.id || venue?.google_place_id)}
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
        <MapContainer center={position} zoom={12} scrollWheelZoom={true}
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