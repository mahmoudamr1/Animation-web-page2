import { Container, Row } from 'react-bootstrap'
import './Card.css'
import Card from 'react-bootstrap/Card';
import React from 'react'




const Cards = ( props ) => {
    return (
        <>

            <Card className='card1'>
                <Card.Img variant="top" src={ props.imglink } />
                <Card.Body>
                    <Card.Title>Test Title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    {/* <small className="">Last updated 3 mins ago</small> */ }
                    <div className='cardfooter'>
                        <a href='#'>Read More</a>
                        <i class="fas fa-long-arrow-alt-right"></i>
                    </div>
                </Card.Footer>
            </Card>
        </>
    )
}

export default Cards

