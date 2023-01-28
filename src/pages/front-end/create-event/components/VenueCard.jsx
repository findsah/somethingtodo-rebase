import { useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { ItemTypes } from '../../components/ItemTypes.js'
import dummy from '../../../../assets/dummy1.png'

export const VenueCard = ({ id, data, index, moveCard, setAddedVenues }) => {

    // remove venue
    const RemoveVenueAction = (item) => {

        setAddedVenues((current) =>
            current.filter((venue) => {


                if (venue.id) {
                    return venue.id !== item?.id
                } else {
                    return venue?.place_id !== item?.place_id
                }

            }
            )
        );
    }
    const ref = useRef(null)
    const [{ handlerId }, drop] = useDrop({
        accept: ItemTypes.CARD,
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            }
        },
        hover(item, monitor) {
            if (!ref.current) {
                return
            }
            const dragIndex = item.index
            const hoverIndex = index
            // Don't replace items with themselves
            if (dragIndex === hoverIndex) {
                return
            }
            // Determine rectangle on screen
            const hoverBoundingRect = ref.current?.getBoundingClientRect()
            // Get vertical middle
            const hoverMiddleY =
                (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
            // Determine mouse position
            const clientOffset = monitor.getClientOffset()
            // Get pixels to the top
            const hoverClientY = clientOffset.y - hoverBoundingRect.top
            // Only perform the move when the mouse has crossed half of the items height
            // When dragging downwards, only move when the cursor is below 50%
            // When dragging upwards, only move when the cursor is above 50%
            // Dragging downwards
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return
            }
            // Dragging upwards
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return
            }
            // Time to actually perform the action
            moveCard(dragIndex, hoverIndex)
            // Note: we're mutating the monitor item here!
            // Generally it's better to avoid mutations,
            // but it's good here for the sake of performance
            // to avoid expensive index searches.
            item.index = hoverIndex
        },
    })
    const [{ isDragging }, drag] = useDrag({
        type: ItemTypes.CARD,
        item: () => {
            return { id, index }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    })
    const customStyle = {
        backgroundColor: "white",
        opacity: isDragging ? "1 !important" : 1,
        border: '1px dashed gray',
        padding: '0.5rem 1rem',
        marginBottom: '.5rem',
        cursor: 'move',
        opacity: isDragging ? 1 : 1

    }

    // isDragging ? 2 : 2
    drag(drop(ref))
    return (
        <div ref={ref} style={{ ...customStyle }} data-handler-id={handlerId}>
            <div className='venue_card' key={data?.id}>
                <img src={data?.imageUrl ? data?.imageUrl : data?.previewImage.length > 0 ? data?.previewImage[0] : dummy} alt="" />
                <h5 >{data?.name}</h5>
                <p className='p_gray_10 '>
                    {
                        data?.description?.length > 530 ?
                            data?.description?.substring(0, 530) + "..."
                            : data?.description?.substring(0, 530)



                    }
                </p>
                <div className='btn-container'>

                    <button className='btn_error desktop_btn'
                        onClick={() => RemoveVenueAction(data)}
                    >
                        <i className="fa fa-minus" aria-hidden="true"></i>
                        REMOVE VENUE
                    </button>
                    <button className='btn_error mobile_btn'
                        onClick={() => RemoveVenueAction(data)}
                    >
                        <i className="fa fa-minus" aria-hidden="true"></i>
                        REMOVE
                    </button>
                </div>

            </div>
        </div>
    )
}
