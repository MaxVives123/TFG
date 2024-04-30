import React, { useEffect, useRef, useState } from 'react';
import * as Cesium from 'cesium';
import './Model3d.css'; // Importando el archivo CSS local
import sound from './Wise and Foolish Virgins, Sant Quirze de Pedret.mp3'
import Card from 'react-bootstrap/Card';
import img from '../images/nova.jpg';
import { Form } from 'react-bootstrap';
import { Collapse } from 'react-bootstrap';
import { Modal, Button, Carousel } from 'react-bootstrap';
import layoutsegleIX from '../images/layout segle IX.jpg' //segle 9
import layoutsegleX from '../images/layout segle X.jpg'  //segle 1
import layoutsegleXI from '../images/GM000013.jpg'  //segle 11
import layoutsegleXII from '../images/GM000013.jpg'  //segle 12
import layoutsegleXIII from '../images/GM000015-Floor plan restorations.jpg'  //segle 13
import exterior from '../images/GM000003-Exterior.JPG'  
import origin from '../images/phases.png'
import firstchurch from '../images/phases9-10.png'
import firstdecoration from '../images/firstdecoration.jpg'
import romanesquedecoration from '../images/romanesquedecoration.jpg'
import reforms from '../images/reforms.jpg'



let indexcamara=0;
let indextileset=0;
let segleAnterior=0;
const Model3d = () => {
  const [open, setOpen] = useState(false);

  
  const [cardTitle, setCardTitle] = useState("Location");
  const [MapTitle, setMapTitle] = useState("IXth century");
  const [cardText, setCardText] = useState("Sant Quirze de Pedret is a small medieval church in central Catalonia's Berguedà area, near the foothills of the Pyrenees and not far from an important historical route. The Llobregat River, one of the territory's main waterways, flows nearby. Source: EHEM-WP7");
  const [MapText, setMapText] = useState("At the end of the ninth century, a very simple church was built as part of the organisation of a territory marked by scattered settlement. The church had a nave and a quadrangular apse covered with a vault. A door in the western façade gave access to the building. Source: EHEM-WP7");
  const [cardImage, setCardImage] = useState(exterior); // Asumiendo que usas Holder.js para imágenes temporales
  const [MapImage, setMapImage] = useState(layoutsegleIX); // Asumiendo que usas Holder.js para imágenes temporales
  const cardData = [
    { title: "Location", text: "Sant Quirze de Pedret is a small medieval church in central Catalonia's Berguedà area, near the foothills of the Pyrenees and not far from an important historical route. The Llobregat River, one of the territory's main waterways, flows nearby. Source: EHEM-WP7", image: exterior },
    { title: "Origin", text: "Originally constructed at the end of the ninth century, the church's architecture has changed a great deal over the years and its walls have been decorated at two different times with the painting of figurative murals. Source: EHEM-WP7", image: origin },
    { title: "First church", text: "The original ninth-century church had a single nave crowned by a quadrangular vaulted apse. Later, in the middle of the 10th century, the church was enlarged with two aisles ending in vaulted horseshoe-shaped apses. As far as we know, the first pictorial decoration was limited to the back wall of the apse and one wall of the original nave, which depicted a crucifixion. Source: EHEM-WP7", image: firstchurch },
    { title: "First decoration", text: "The compositions that originally occupied the back of the apse consist of two medallions with figures. One of the figures is a bearded male with open arms in a prayerful attitude. The other is a warrior on horseback and the image is enclosed by a medallion at the center of a cross. Other figures of different proportions complete the imagery, which it has not yet been possible to interpret. The paintings can be dated to the middle of the 10th or early 11th century. Source: EHEM-WP7", image: firstdecoration },
    { title: "Romanesque decoration", text: "Later, a second and more expansive layer of Romanesque-style frescoes covered the earlier paintings. The renewed decoration was the result of an ambitious iconographic programme whose authorship, as usual, is unknown. The frescoes include a complex apocalyptic cycle, quite unusual for Romanesque art in the Pyrenees. Other subjects worth noting are a rare personification of the Church and two hagiographic scenes of the martyr patron saint Cyricus and his mother Julitta. Also, a second crucifixion was painted directly over the earlier one. Source: EHEM-WP7", image: romanesquedecoration },
    { title: "Reforms in the church", text: "At some point in the 13th century, an incident of unknown nature changed the appearance of the building. One of the main consequences was that most of the Romanesque paintings were hidden behind new walls. Only the frescoes of the south apse remained uncovered.", image: reforms },
    // Añade más según sea necesario
  ];
  const cardMaps = [
    { title: "IXth century", text: "At the end of the ninth century, a very simple church was built as part of the organisation of a territory marked by scattered settlement. The church had a nave and a quadrangular apse covered with a vault. A door in the western façade gave access to the building. Source: EHEM-WP7", image: layoutsegleIX },
    { title: "Xth century", text: "In the 10th century, the first church was completely renovated and enlarged. The height of the nave was raised and open windows were installed on the south side. The apse was also raised and covered by a new horseshoe-shaped vault. Lastly, two aisles and two small horseshoe-shaped apses were added. Owing to the steep topographical features of the site, the aisle and the apse on the north side were built at a higher level. The aisles opened onto the central nave by means of two horseshoe arches on each side. A door in the south aisle marked the new entrance. Source: EHEM-WP7", image: layoutsegleX },
    { title: "XIth century", text: "Between the second half of the 10th century and the beginning of the 11th century, the church received its first pictorial decorations. The main apse featured depictions of two figures surrounded by a clipeus, one of those cross-shaped; and a crucifixion was displayed in the nave. Source: EHEM-WP7", image: layoutsegleXI },
    { title: "XIIth century", text: "The walls of the church were decorated with a new series of frescoes in the Romanesque style, which covered the earlier ones. An apocalyptic cycle, quite unusual for Romanesque churches in the Pyrenees, decorated the main apse. Other notable features included two hagiographic scenes of the martyred patron saint Cyricus and his mother Julitta on the main arch; the Parable of the Wise and Foolish Virgins and a unique personification of the Church in the south apsidiole; and a new crucifixion covering the earlier one. Source: EHEM-WP7", image: layoutsegleXII },
    { title: "XIIIth century", text: "An incident of unknown nature, perhaps a fire, must have been catastrophic, since two-thirds of the south nave collapsed. As a result, it became necessary to carry out major alterations to the church and important parts of the mural paintings were covered over. Specifically, the southern nave was removed, the central nave was covered with a vault, which made it necessary to reinforce the walls, and a new door was opened on the south side of the nave. Source: EHEM-WP7", image: layoutsegleXIII },
    // Añade más según sea necesario
  ];



  const tilesets = useRef([]); // Array para almacenar los tilesets como referencia global
  const cesiumContainer = useRef(null);
  const viewerRef = useRef(null);
  const assets = [2373034, 2373060, 2421313, 2421315, 2421316]
  const wonAudio = new Audio(sound)
  const tourLocations = [
    { longitude: 1.880305, latitude: 42.107272, height: 664.35, heading: 87.86, pitch: -9.82, roll: 360 },
    { longitude: 1.882769, latitude: 42.106738, height: 681.33, heading: 43.78, pitch: -18.88, roll: 360 },
    { longitude: 1.882841, latitude: 42.107545, height: 663.69, heading: 98.43, pitch: -14.43, roll: 0 },
    { longitude: 1.883610, latitude: 42.107454, height: 649.65, heading: 109.66, pitch: -4.91, roll: 0 },
    { longitude: 1.883617, latitude: 42.107460, height: 647.43, heading: 111.27, pitch: 16.24, roll: 0 },
    { longitude: 1.883746, latitude: 42.107445, height: 649.35, heading: 304.87, pitch: -1.37, roll: 0 },
    { longitude: 1.883707, latitude: 42.107466, height: 650.45, heading: 110.86, pitch: -18.93, roll: 0 },
    { longitude: 1.883660, latitude: 42.107395, height: 649.15, heading: 108.77, pitch: -6.99, roll: 0 },
    { longitude: 1.883707, latitude: 42.107377, height: 648.56, heading: 276.57, pitch: -2.39, roll: 0 }


  ];
  Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyMmVlZDFkZC02NTljLTQ5ZDgtYWExMy0zODc1NzI5Yzk5MWUiLCJpZCI6MTc4NzY3LCJpYXQiOjE3MDAxMzg3MjZ9.yGl0rRvvjoGMDoH0qSx4t0TZMDy1r2hzRsspYZyL2zk';

  const [annotationsText, setAnnotationsText] = useState('');
  const [phasesText, setPhasesText] = useState('');

  // Función para cargar y procesar XML genérico
  const loadAndProcessXML = (xmlFilePath, processFunction) => {
    fetch(xmlFilePath)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error al leer el archivo XML: ${xmlFilePath}`);
        }
        return response.text();
      })
      .then(xmlString => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
        processFunction(xmlDoc);
      })
      .catch(error => {
        console.error('Error al procesar el archivo XML:', error);
        alert('Error al procesar el archivo XML: ' + error.message);
      });
  };

  // Función específica para procesar Annotations.xml
  const processAnnotationsXML = (xmlDoc) => {
    const annotations = xmlDoc.getElementsByTagName('AnnotationText');
    let textoConcatenado = '';
    for (let i = 0; i < annotations.length; i++) {
      textoConcatenado += annotations[i].textContent + '\n';
    }
    setAnnotationsText(prevText => prevText + textoConcatenado);
  };

  // Función específica para procesar Architectural_Phases.xml
  const processArchitecturalPhasesXML = (xmlDoc) => {
    const phases = xmlDoc.getElementsByTagName('PhaseText');
    let textoConcatenado = '';
    for (let i = 0; i < phases.length; i++) {
      textoConcatenado += phases[i].textContent + '\n';
    }
    setPhasesText(textoConcatenado);
    alert('Architectural_Phases.xml procesado correctamente.');
  };

useEffect(() => {
    //loadAndProcessXML('Annotations.xml', processAnnotationsXML);
    //loadAndProcessXML('Architectural_Phases.xml', processArchitecturalPhasesXML);
  
   iniciarTot(); // Asegúrate de que esta función está definida y qué hace.
}, []);



  const iniciarTot = async() => {
    
            // Asegurarse de que el contenedor DOM está listo
            if (cesiumContainer.current && !viewerRef.current) {
              // Configura el token de acceso de Cesium Ion
              viewerRef.current = new Cesium.Viewer(cesiumContainer.current, {
                terrain: Cesium.Terrain.fromWorldTerrain(),
                infoBox: false
              });
              viewerRef.current.clock.currentTime = Cesium.JulianDate.fromIso8601("2024-04-30T17:00:00Z");
    
    
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
const CambiarSegle = (segle) => {

  tilesets.current[segleAnterior].show = false;  
  tilesets.current[segle].show = true;
  segleAnterior=segle;
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
    // Actualizar el contenido de la tarjeta
    setCardTitle(cardData[indexcamara].title);
    setCardText(cardData[indexcamara].text);
    setCardImage(cardData[indexcamara].image);
    setMapTitle(cardMaps[indexcamara].title);
    setMapText(cardMaps[indexcamara].text);
    setMapImage(cardMaps[indexcamara].image);
  indexcamara+=1;
  if(indexcamara==6){
    indexcamara=0;
  }
};

const [showImage, setShowImage] = useState(false);
const [hoveredImage, setHoveredImage] = useState(layoutsegleXI);

const handleMouseOver = (event) => {
  const target = event.target;
  const rect = target.getBoundingClientRect();
  const x = event.clientX - rect.left; // x position within the element.
  const max = target.getAttribute('max') || 1;
  const min = target.getAttribute('min') || 0;
  const value = min + (x / rect.width) * (max - min);
  const hoverIndex = Math.round(value); // Redondear al índice más cercano

  if (hoverIndex >= 0 && hoverIndex < images.length) {
    setHoveredImage(images[hoverIndex]);
    setShowImage(true);
  }
};

const handleMouseOut = () => {
  setShowImage(false);
};


const [sliderValue, setSliderValue] = useState(0);  // Estado para manejar la posición del slider
const images = [
  layoutsegleXI,
  layoutsegleXI,
  layoutsegleXI,
  layoutsegleXI,
  layoutsegleXI,
  layoutsegleXI
  // Asegúrate de que este arreglo tenga tantos elementos como `tourLocations`
];

// Función para manejar el cambio en el slider y actualizar la cámara o la imagen
const handleSliderChange = (event) => {
  const newIndex = parseInt(event.target.value, 10);
  setSliderValue(newIndex);
  moveCameraToIndex(newIndex); // Asegúrate de tener esta función definida
  setHoveredImage(images[newIndex]); // Actualiza la imagen al cambiar el slider
  if(newIndex==0){
    CambiarSegle(0);
    setMapTitle(cardMaps[0].title);
    setMapText(cardMaps[0].text);
    setMapImage(cardMaps[0].image);
  }
  else if(newIndex==1){
    CambiarSegle(0);
    setMapTitle(cardMaps[0].title);
    setMapText(cardMaps[0].text);
    setMapImage(cardMaps[0].image);

    }
  else if(newIndex==2){
    CambiarSegle(1);
    setMapTitle(cardMaps[1].title);
    setMapText(cardMaps[1].text);
    setMapImage(cardMaps[1].image);

    }
    else if(newIndex==3){
      CambiarSegle(2);
      setMapTitle(cardMaps[2].title);
      setMapText(cardMaps[2].text);
      setMapImage(cardMaps[2].image);
      }
      else if(newIndex==4){
        CambiarSegle(3);
        setMapTitle(cardMaps[3].title);
        setMapText(cardMaps[3].text);
        setMapImage(cardMaps[3].image);
        }
        else if(newIndex==5){
          CambiarSegle(4);
          setMapTitle(cardMaps[4].title);
          setMapText(cardMaps[4].text);
          setMapImage(cardMaps[4].image);
          }
};

// Mueve la cámara basada en el índice del slider
const moveCameraToIndex = (index) => {
    const location = tourLocations[index];
    viewerRef.current.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(location.longitude, location.latitude, location.height),
        orientation: {
            heading: Cesium.Math.toRadians(location.heading),
            pitch: Cesium.Math.toRadians(location.pitch),
            roll: Cesium.Math.toRadians(location.roll)
        }
    });

    // Opcional: Actualizar la imagen representativa
      // Actualizar el contenido de la tarjeta
      setCardTitle(cardData[index].title);
      setCardText(cardData[index].text);
      setCardImage(cardData[index].image);
};

const [showModal, setShowModal] = useState(false);
const showCarousel = () => setShowModal(true);
const handleClose = () => setShowModal(false);




return (
  <>
    <div id="cesiumContainer" ref={cesiumContainer} style={{ width: '100%', height: '95vh' }}></div>
        {showImage && (
        <div style={{
          position: 'absolute',
          bottom: '100px',
          left: `${10 + sliderValue / (tourLocations.length - 1) * 80}%`,
          transform: 'translateX(-50%)',
          zIndex: 1002
        }}>
          <img src={hoveredImage} alt="Preview" style={{ width: '200px', height: 'auto' }} />
        </div>
      )}

      {/* Slider para controlar la línea de tiempo */}
      <Form.Group className="custom-slider">
        <Form.Label></Form.Label>
          <Form.Range
            min="0"
            max={tourLocations.length - 1}
            value={sliderValue}
            onChange={handleSliderChange}
            onMouseMove={handleMouseOver}
            onMouseLeave={handleMouseOut}
            className="form-range"
          />

      </Form.Group>

      <div className="text-overlay-container">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={cardImage} />
          <Card.Body>
            <Card.Title>{cardTitle}</Card.Title>
            <Card.Text>{cardText}</Card.Text>
            <Button variant="outline-dark" onClick={handleAudioPlay}>Start Audio</Button>{' '}
            <Button variant="outline-dark" onClick={handleAudioPause}>Stop Audio</Button>{' '}
          </Card.Body>
        </Card>
      </div>
      <div className="text-overlay-container-ELOTRO">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={MapImage} />
          <Card.Body>
            <Card.Title>{MapTitle}</Card.Title>
            <Card.Text>{MapText}</Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="button-overlay-container">
      {/* Agregar el elemento de audio */}
      <Button variant="dark" onClick={showCarousel}>GM</Button>{' '}

    </div>
    <Modal show={showModal} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Galería de Imágenes</Modal.Title>
        </Modal.Header>
      <Modal.Body>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={layoutsegleIX}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>IX Siglo</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={layoutsegleX}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>X Siglo</h3>
            </Carousel.Caption>
          </Carousel.Item>
          {/* Añadir más elementos al carrusel según sea necesario */}
        </Carousel>
      </Modal.Body>
    </Modal>

  </>
);
};

export default Model3d;