import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../images/nova.jpg';
import img2 from '../images/217_2.jpg';
import img3 from '../images/web_exterior_01_0.jpg';
import './CarouselPage.css'; // Importando el archivo CSS local

function CarouselPage() {
  return (
    
    <Carousel fade>
    <Carousel.Item>
      <img 
        className="d-block w-100"
        src={img1}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img 
        className="d-block w-100"
        src={img2}
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={img3}
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  
  )
}

export default CarouselPage