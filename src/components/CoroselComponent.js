
import React from 'react'
import { Carousel } from 'react-bootstrap'
import carousel_1 from '../img/1.jpg'
import carousel_2 from '../img/2.jpg'
import carousel_3 from '../img/11.png'

const CoroselComponent = () => {
    return (
        <Carousel >
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={carousel_1}
                    alt="First slide"
                    style={{ height: "700px" }}
                />
                <Carousel.Caption>
                    <h3>Welcome to Enigma-mart</h3>
                    <p>Happy Shooping</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={carousel_2}
                    alt="Second slide"
                    style={{ height: "700px" }}
                />

                <Carousel.Caption>
                    <h3>Welcome to Enigma-mart</h3>
                    <p>Happy Shooping</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 bg-cover"
                    src={carousel_3}
                    alt="Third slide"
                    style={{ height: "700px" }}
                />
                <Carousel.Caption>
                    <h3 className="bg-black">Welcome to Enigma-mart</h3>
                    <p>Happy Shooping</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default CoroselComponent
