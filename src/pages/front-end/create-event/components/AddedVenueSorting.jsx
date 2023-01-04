import update from 'immutability-helper'
import { useCallback, useState } from 'react'
import { VenueCard } from './VenueCard.jsx'
const style = {
    display: 'flex',
}
export const AddedVenueSorting = ({ venueCard, setVenueCard }) => {
    {

        const moveCard = useCallback((dragIndex, hoverIndex) => {
            setVenueCard((prevCards) =>
                update(prevCards, {
                    $splice: [
                        [dragIndex, 1],
                        [hoverIndex, 0, prevCards[dragIndex]],
                    ],
                }),
            )
        }, [])
        const renderCard = useCallback((card, index) => {
            return (
                <VenueCard
                    key={card?.id}
                    index={index}
                    id={card?.id}
                    data={card}
                    moveCard={moveCard}
                    setAddedVenues={setVenueCard}

                />
            )
        }, [])
        return (
            <>
                <div className='venue_cards' style={style}>
                    {
                        venueCard?.length > 0 ?
                            venueCard?.map((card, i) => renderCard(card, i)) :
                            <div className='d-flex justify-content-center align-items-center mt-3 mb-3 '>
                                No Veneu is Added. add view to see
                            </div>
                    }
                </div>
            </>
        )
    }
}
