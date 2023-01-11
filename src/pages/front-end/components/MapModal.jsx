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
            place_id: item?.place_id,
            images: "",
            imageUrl: item?.photos ? item?.photos[0]?.getUrl() : "",
            description: item?.vicinity,
            name: item?.name,
            location: {
                lat: item?.geometry?.location?.lat(),
                lng: item?.geometry?.location?.lng()
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
        return venue?.id || venue?.place_id
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

        if (data?.length > 0 && typeof data[0]?.geometry?.location?.lat === "function") {
            //need to check
            const setposition = [data[0]?.geometry?.location?.lat(), data[0]?.geometry?.location?.lng()]
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
            return data?.filter(entry => Object?.values(entry)?.some(val => typeof val === "string" && val?.match(keyword)))
                ?.filter(item => {
                    if (catogory == "dining") {

                        return Object?.values(item.types)?.some(val => typeof val === "string" && val.includes("bar") ||
                            val.includes("bakery") ||
                            val.includes("cafe") ||
                            val.includes("restaurant"))
                    }
                    else if (catogory == "nightlife") {

                        return Object?.values(item.types)?.some(val => typeof val === "string" && val.includes("bar") ||
                            val.includes("night_club") ||

                            val.includes("casino"))
                    }
                    else if (catogory == "adventure") {

                        return Object?.values(item.types)?.some(val => typeof val === "string" && val.includes("airport") ||
                            val.includes("amusement_park") ||
                            val.includes("aquarium") ||
                            val.includes("campground") ||
                            val.includes("park") ||
                            val.includes("tourist_attraction") ||
                            val.includes("zoo") ||

                            val.includes("bus_station") ||
                            val.includes("light_rail_station") ||
                            val.includes("natural_feature") ||
                            val.includes("point_of_interest"))
                    }
                    else if (catogory == "art") {

                        return Object?.values(item.types)?.some(val => typeof val === "string" && val.includes("art_gallery") ||


                            val.includes("museum"))
                    }
                    else if (catogory == "entertainment") {

                        return Object?.values(item.types)?.some(val => typeof val === "string" && val.includes("bar") ||
                            val.includes("movie_theater") ||
                            val.includes("stadium") ||
                            val.includes("tourist_attraction") ||
                            val.includes("museum") ||
                            val.includes("night_club") ||

                            val.includes("amusement_park") ||
                            val.includes("book_store") ||

                            val.includes("museum"))
                    }
                    else if (catogory == "music") {

                        return Object?.values(item.types)?.some(val => typeof val === "string" && val.includes("stadium") ||
                            val.includes("bar") ||
                            val.includes("casino") ||
                            val.includes("night_club"))
                    }
                    else if (catogory == "casual") {

                        return Object?.values(item.types)?.some(val => typeof val === "string" && val.includes("spa") ||
                            val.includes("aquarium") ||
                            val.includes("art_gallery") ||
                            val.includes("beauty_salon") ||
                            val.includes("book_store") ||
                            val.includes("book_store") ||
                            val.includes("park") ||
                            val.includes("shopping_mall") ||
                            val.includes("tourist_attraction") ||
                            val.includes("university"))
                    }
                    else if (catogory == "celebrations") {

                        return Object?.values(item.types)?.some(val => typeof val === "string" && val.includes("spa") ||
                            val.includes("night_club") ||
                            val.includes("bar") ||
                            val.includes("casino") ||
                            val.includes("amusement_park") ||
                            val.includes("church") ||
                            val.includes("hindu_temple") ||
                            val.includes("lodging") ||
                            val.includes("mosque") ||
                            val.includes("stadium") ||
                            val.includes("stadium") ||
                            val.includes("tourist_attraction") ||
                            val.includes("place_of_worship") ||
                            val.includes("restaurant"))
                    }
                    else if (catogory == "gaming") {

                        return Object?.values(item.types)?.some(val => typeof val === "string" && val.includes("stadium"))

                    }
                    else if (catogory == "education") {

                        return Object?.values(item.types)?.some(val => typeof val === "string" && val.includes("art_gallery") ||
                            val.includes("book_store") ||
                            val.includes("library") ||
                            val.includes("museum") ||
                            val.includes("university") ||
                            val.includes("zoo") ||
                            val.includes("hindu_temple") ||
                            val.includes("lodging") ||
                            val.includes("mosque") ||
                            val.includes("stadium") ||
                            val.includes("stadium") ||
                            val.includes("tourist_attraction") ||
                            val.includes("place_of_worship") ||
                            val.includes("restaurant"))
                    }
                    else if (catogory == "sports") {

                        return Object?.values(item.types)?.some(val => typeof val === "string" && val.includes("stadium") ||
                            val.includes("bowling_alley") ||
                            val.includes("gym") ||
                            val.includes("park") ||
                            val.includes("university"))

                    }
                    else {
                        return item
                    }
                })?.map((venue) => {

                    const checkposition =

                        typeof venue?.geometry?.location?.lat === "function" ?
                            [venue?.geometry?.location?.lat(), venue?.geometry?.location?.lng()] : position


                    return (
                        <Marker
                            position={venue?.position || checkposition}
                            // position={position}
                            icon={addedVenueId?.includes(venue?.id || venue?.place_id) ? iconGreen : iconBlue}
                            key={venue?.id || venue?.place_id}>
                            <Popup className='map_venue_list' >
                                {/* {venue?.Title || venue?.name}
                             */}
                                {/* //need to check */}
                                <img src={venue?.photos?.length > 0 && typeof venue?.photos[0]?.getUrl === "function" ? venue?.photos[0]?.getUrl() : dummy} alt="" />


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
                                            opacity: addedVenueId?.includes(venue?.id || venue?.place_id) ? '0.4' : ''
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