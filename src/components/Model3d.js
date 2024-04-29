import React, { useEffect, useRef } from 'react';
import * as Cesium from 'cesium';
import './Model3d.css'; // Importando el archivo CSS local
import sound from './Wise and Foolish Virgins, Sant Quirze de Pedret.mp3'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const Model3d = () => {
  let indextileset=0;
  let indexcamara=1;
const tilesets = useRef([]); // Array para almacenar los tilesets como referencia global
  const cesiumContainer = useRef(null);
  const viewerRef = useRef(null);
  const assets = [2373034, 2373060, 2421313, 2421315, 2421316]
  const wonAudio = new Audio(sound)
  const tourLocations = [
    { longitude: 1.883445, latitude: 42.10700, height: 665.0000000005, heading: 0, pitch: -35, roll: 0 },
    { longitude: 1.883485, latitude: 42.107351, height: 647.24, heading: -35, pitch: 0, roll: 0 },
    { longitude: 1.883000, latitude: 42.107391, height: 647.24, heading: -35, pitch: 0, roll: 0 },
    { longitude: 1.882579, latitude: 42.107355, height: 647.46, heading: 317.61, pitch: 5.95, roll: 0 },
    { longitude: 1.882138, latitude: 42.107340, height: 648.01, heading: 316.29, pitch: 5.40, roll: 0 },
    { longitude: 1.881683, latitude: 42.107346, height: 648.12, heading: 315.27, pitch: 2.61, roll: 0 }


  ];
  Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyMmVlZDFkZC02NTljLTQ5ZDgtYWExMy0zODc1NzI5Yzk5MWUiLCJpZCI6MTc4NzY3LCJpYXQiOjE3MDAxMzg3MjZ9.yGl0rRvvjoGMDoH0qSx4t0TZMDy1r2hzRsspYZyL2zk';

  
  useEffect(() => {
    // Llama a la función iniciarTot() solo una vez después del montaje del componente

    
    iniciarTot();
  }, []);


  const iniciarTot = async() => {
    
            // Asegurarse de que el contenedor DOM está listo
            if (cesiumContainer.current && !viewerRef.current) {
              // Configura el token de acceso de Cesium Ion
              viewerRef.current = new Cesium.Viewer(cesiumContainer.current, {
                terrain: Cesium.Terrain.fromWorldTerrain(),
                infoBox: false
              });
              viewerRef.current.clock.currentTime = Cesium.JulianDate.fromIso8601("2023-04-22T07:36:00Z");
    
    
            const initCesium = async () => {
              try {
                for (let i = 0; i < assets.length; i++) {
                    const tileset = await Cesium.Cesium3DTileset.fromIonAssetId(assets[i]);
                    viewerRef.current.scene.primitives.add(tileset);
                    tileset.show = i === 0; // Solo muestra el primer tileset inicialmente
                    tilesets.current.push(tileset); // Almacena la referencia del tileset en el array global
                    
                }
            } catch (error) {
                console.error(error);
            }
    
            }
            initCesium();

            // Establecer la posición inicial de la cámara
            viewerRef.current.camera.flyTo({
              destination: Cesium.Cartesian3.fromDegrees(
                tourLocations[0].longitude,
                tourLocations[0].latitude,
                tourLocations[0].height
              ),
              orientation: {
                heading: Cesium.Math.toRadians(tourLocations[0].heading),
                pitch: Cesium.Math.toRadians(tourLocations[0].pitch),
                roll: Cesium.Math.toRadians(tourLocations[0].roll)
              }
            });

          }
};
          
const handleAudioPlay = () => {
    wonAudio.play();
  
};
const handleAudioPause = () => {
  wonAudio.pause();

};

const handleNextTileset = () => {
  // Incrementa el índice
  let nextIndex = indextileset + 1;

  // Si el próximo índice excede el tamaño del array, reinicia a 0
  if (nextIndex >= tilesets.current.length) {
      nextIndex = 0;
  }

  // Oculta el tileset actual y muestra el próximo simultáneamente
  tilesets.current[indextileset].show = false;
  tilesets.current[nextIndex].show = true;

  // Actualiza el índice actual al nuevo
  indextileset = nextIndex;
};

const moveCamera = () => {

  viewerRef.current.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(
      tourLocations[indexcamara].longitude,
      tourLocations[indexcamara].latitude,
      tourLocations[indexcamara].height
    ),
    orientation: {
      heading: Cesium.Math.toRadians(tourLocations[indexcamara].heading),
      pitch: Cesium.Math.toRadians(tourLocations[indexcamara].pitch),
      roll: Cesium.Math.toRadians(tourLocations[indexcamara].roll)
    }
  });
  indexcamara= indexcamara+1;
  if(indexcamara==6){
    indexcamara=0;
  }
};

return (
  <>
    <div id="cesiumContainer" ref={cesiumContainer} style={{ width: '100%', height: '95vh' }}></div>
      <div className="text-overlay-container">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    <div className="button-overlay-container">
      {/* Agregar el elemento de audio */}
      <Button variant="outline-primary" onClick={handleAudioPlay}>Start Audio</Button>{' '}
      <Button variant="outline-primary" onClick={handleAudioPause}>Stop Audio</Button>{' '}
      <Button variant="outline-primary" onClick={handleNextTileset}>Seguent Segle</Button>{' '}
      <Button variant="outline-primary" onClick={moveCamera}>Moure Camara</Button>{' '}
    </div>
  </>
);
};

export default Model3d;