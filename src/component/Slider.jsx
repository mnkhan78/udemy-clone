import React from "react";
import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from "components/ExampleCarouselImage";
import slider1 from "../img/home-slider-1.jpg";
import slider2 from "../img/home-slider-2.jpg";
import slider3 from '../img/home-slider-3.png';
const Slider = () => {
  return (
    <div>
      <Carousel data-bs-theme="dark">
        <Carousel.Item interval={1000}>
          {/* <ExampleCarouselImage text="First slide" /> */}
          <img src={slider2} alt="" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          {/* <ExampleCarouselImage text="Second slide" /> */}
          <img src={slider1} alt="" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {/* <ExampleCarouselImage text="Third slide" /> */}
          <img src={slider3} alt="" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
