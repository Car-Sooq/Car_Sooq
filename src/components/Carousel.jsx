import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';


export default class Slideshow extends Component {
    render() {
        return(
            <div>
            <Carousel>
                <Carousel.Item interval={2000}>
                    <img
                    className="d-block w-100 img-responsive"
                    src="https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="First slide"
                    //   width="100%" height="500px"
                    />
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                    className="d-block w-100 img-responsive"
                    src="https://images.pexels.com/photos/712618/pexels-photo-712618.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                    alt="Third slide"
                    //   width="50%" height="500px"
                    />
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                    className="d-block w-100 img-responsive"
                    src="https://images.pexels.com/photos/3422964/pexels-photo-3422964.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="Third slide"
                    //   width="50%" height="500px"
                    />
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                    className="d-block w-100 img-responsive"
                    src="https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="Third slide"
                    //   width="50%" height="500px"
                    />              
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                    className="d-block w-100 img-responsive"
                    src="https://images.pexels.com/photos/3342697/pexels-photo-3342697.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="Third slide"
                    //   width="50%" height="500px"
                    />              
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                    className="d-block w-100 img-responsive"
                    src="https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="Third slide"
                    //   width="50%" height="500px"
                    />              
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                    className="d-block w-100 img-responsive"
                    src="https://images.pexels.com/photos/235222/pexels-photo-235222.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                    alt="Third slide"
                    //   width="50%" height="500px"
                    />              
                </Carousel.Item>
            </Carousel>
            </div>
        )
    }
}