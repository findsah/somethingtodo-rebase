import React from 'react'
import { Button, Card } from 'react-bootstrap'
import vanueImg from "../../../../assets/Rectangle 11.jpg";

export default function 
() {
  return (
    <div className='vanue-style'>
        <Card className="vanues-card-style">
                    <Card.Img variant="top" src={vanueImg} />
                    <div className="card-custom-Body">
                      <Card.Body>
                        <Card.Title>LOREM IPSUM DOLOR SIT AMET</Card.Title>
                        <Card.Text className="desc">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nunc vulputate libero et velit interdum, ac
                          aliquet odio mattis.
                        </Card.Text>
                        <Card.Text className="buttonss">
                          <Button className="btn-main">EDIT VENUE</Button>
                          <Button variant="outlined" className="outlined-btn">
                            REMOVE VENUE
                          </Button>
                        </Card.Text>
                      </Card.Body>
                    </div>
                  </Card>
    </div>
  )
}
