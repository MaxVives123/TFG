import React from 'react';
import CarouselPage from './CarouselPage';
import BarraNavegacion from './NavBar';
import Stack from 'react-bootstrap/Stack';
import img1 from '../images/nova.jpg';

function FAQ() {
  return (
    <div style={{ height: '100vh', width: '100vw', overflowY: 'auto',backgroundColor: '#f5f5f5' }}> {/* Ajusta la altura máxima según sea necesario */}

    <Stack gap={3}>
      <div className="p-2">
        <Stack direction="horizontal" gap={3}>
          <div className="p-2">
            <img 
              className="d-block w-100"
              src={img1}
              alt="First slide"
            />
          </div>
          <div className="p-2">
            Second item
          </div>
          <div className="p-2">
            Third item
          </div>
        </Stack>
      </div>
      <div className="p-2">
        <Stack direction="horizontal" gap={3}>
            <div className="p-2">
              Primera imatge

            </div>
            <div className="p-2">
              <img 
                  className="d-block w-100"
                  src={img1}
                  alt="First slide"
                />
              </div>
            <div className="p-2">
              Third item
            </div>
          </Stack>
      </div>
      <div className="p-2">
        <Stack direction="horizontal" gap={3}>
              <div className="p-2">
                Primera imatge

              </div>
              <div className="p-2">
                <img 
                    className="d-block w-100"
                    src={img1}
                    alt="First slide"
                  />
                </div>
              <div className="p-2">
                Third item
              </div>
            </Stack>
      </div>
    </Stack>
    </div>
  );
}

export default FAQ;
