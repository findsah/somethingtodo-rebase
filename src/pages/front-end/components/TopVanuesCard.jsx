import React from 'react'
import { Card } from 'react-bootstrap';
import vanueImg from '../../../assets/Rectangle 11.jpg'
import { MdLocationPin } from 'react-icons/md'


const TopVanuesCard = ({ data }) => {

    return (
        <Card className='top-vanues-card-style'>
            <Card.Img variant="top" src={data?.image ? data?.image[0]?.url : vanueImg} height="172px" />
            <div className='card-custom-Body'>
                <Card.Body>
                    <Card.Title>{data?.venue_name}</Card.Title>
                    <Card.Text className='desc'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                    </Card.Text>
                    <Card.Text className='address'>
                        <MdLocationPin className='loction-icon' />
                        {data?.description}
                    </Card.Text>
                </Card.Body>
                <div className='blue-side'>
                    <p>
                        2022<br />
                        march<br />
                        <span>16 - 22</span>
                    </p>
                </div>
            </div>
        </Card>
    )
}

export default TopVanuesCard