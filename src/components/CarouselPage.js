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

      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img 
        className="d-block w-100"
        src={img2}
        alt="Second slide"
      />

      <Carousel.Caption>

      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={img3}
        alt="Third slide"
      />

      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  
  )
}

export default CarouselPage