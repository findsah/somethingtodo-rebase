/* 
author: arman ali
github: https://github.com/Arman-Arzoo
whatsapp: +923430048341
*/
import React, { createRef, useEffect, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMapEvent, useMap, useMapEvents } from 'react-leaflet'
import dummy from '../../../assets/dummy1.png'
import { iconBlue, iconGreen } from '../../../assets/leftletIcon/icon'

const AddedVenueMap = ({ position, addedVenues }) => {

    console.log(addedVenues)
    const mapRef = createRef();

    const addedVenueId = addedVenues?.map((venue) => {
        return venue?.id || venue?.google_place_id || venue?.place_id
    })


    // useEffect(() => {

    //     if (data?.length > 0 && typeof data[0]?.geometry?.location?.lat === "function") {

    //         const setposition = [data[0]?.geometry?.location?.lat(), data[0]?.geometry?.location?.lng()]
    //         setPositionLocate(setposition)

    //     }
    // }, [data])



    function MultipleMarkers() {
        const map = useMapEvent({
            click() {
                map.locate();
                // map.flyTo(positionLocate, map.getZoom())
            },


        });

        // map.flyTo(addedVenues[0]?.location?.lat ? [addedVenues[0]?.location?.lat, addedVenues[0]?.location?.lng] : [33, 73], map.getZoom())
        // mapRef?.current?.map.setZoom(zoom)



        {
            return addedVenues?.map((venue, index) => {


                return (
                    <Marker
                        // position={[venue?.geometry?.location?.lat(), venue?.geometry?.location?.lng()]}
                        position={[venue?.location?.lat, venue?.location?.lng]}
                        icon={addedVenueId?.includes(venue?.id || venue?.google_place_id || venue?.place_id) ? iconGreen : iconBlue}
                        key={index}>
                        <Popup className='map_venue_list' >
                            {/* {venue?.Title || venue?.name}
                             */}
                            {/* //need to check */}
                            <img src={venue?.image ? `data:image/png;base64,${venue?.image}` : venue?.previewImage.length > 0 ? venue?.previewImage[0] : dummy} alt="" />

                            {/* <img src={venue?.photos?.length > 0 && typeof venue?.photos[0]?.getUrl === "function" ? venue?.photos[0]?.getUrl() : dummy} alt="" /> */}


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
                                <button className='btn_secondary '
                                    style={{
                                        background: addedVenueId?.includes(venue?.id || venue?.google_place_id || venue?.place_id) ? 'green' : '',
                                        opacity: addedVenueId?.includes(venue?.id || venue?.google_place_id || venue?.place_id) ? '0.4' : ''
                                    }}
                                    disabled={addedVenueId?.includes(venue?.id || venue?.google_place_id || venue?.place_id)}
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
        <MapContainer center={[localStorage.getItem("lat"), localStorage.getItem("lag")]} zoom={16} scrollWheelZoom={true}
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

export default AddedVenueMap