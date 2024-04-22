import React, { useEffect, useRef } from 'react';
import * as Cesium from 'cesium';
import './Model3d.css'; // Importando el archivo CSS local


const Model3d = () => {
  const cesiumContainer = useRef(null);
  const viewerRef = useRef(null);
  const assets = [2373034, 2373060, 2421313, 2421315, 2421316]
  let indextileset = 0;
  const tilesets = useRef([]); // Array para almacenar los tilesets como referencia global
  let currentIndex=0;
  const tourLocations = [
    { longitude: 1.883445, latitude: 42.10700, height: 765.0000000005, heading: 0, pitch: -35, roll: 0 },
    { longitude: 1.883484, latitude: 42.107351, height: 143.24, heading: Cesium.Math.toRadians(321.42), pitch: Cesium.Math.toRadians(-0.18), roll: Cesium.Math.toRadians(360) }
  ];
  
  


    useEffect(() => {
        // Asegurarse de que el contenedor DOM está listo
        if (cesiumContainer.current) {
          // Configura el token de acceso de Cesium Ion
          Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyMmVlZDFkZC02NTljLTQ5ZDgtYWExMy0zODc1NzI5Yzk5MWUiLCJpZCI6MTc4NzY3LCJpYXQiOjE3MDAxMzg3MjZ9.yGl0rRvvjoGMDoH0qSx4t0TZMDy1r2hzRsspYZyL2zk';
          const viewer = new Cesium.Viewer(cesiumContainer.current, {
            terrain: Cesium.Terrain.fromWorldTerrain(),
          });
        // Establecer la posición inicial de la cámara
        viewer.camera.setView({
          destination: Cesium.Cartesian3.fromDegrees(1.883445, 42.10700, 665.0000000005),
          orientation: {
              heading: Cesium.Math.toRadians(0),  // Hacia el norte, en radianes
              pitch: Cesium.Math.toRadians(-35), // Mirando hacia abajo, en radianes
              roll: 0                            // Sin rotación lateral
          }
        });


        const initCesium = async () => {
          try {
            for (let i = 0; i < assets.length; i++) {
                const tileset = await Cesium.Cesium3DTileset.fromIonAssetId(assets[i]);
                viewer.scene.primitives.add(tileset);
                tileset.show = i === 0; // Solo muestra el primer tileset inicialmente
                tilesets.current.push(tileset); // Almacena la referencia del tileset en el array global
            }
        } catch (error) {
            console.error(error);
        }

        }
        initCesium();
        viewerRef.current = viewer;
        if(viewerRef.current == viewer){
          console.error("funciona wtf");
        }
        


        }
    }, []); // El array vacío asegura que esto solo se ejecute una vez al montar el componente

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
  
  
  const handleToggleVisibility = () => {

  };
  
  


    return (
      <>
      <div id="cesiumContainer" ref={cesiumContainer} style={{ width: '100%', height: '95vh' }}></div>
      <div className="button-overlay-container">
        <button className="button-overlay" onClick={handleNextTileset}>Siguiente Tileset</button>
        <button className="button-overlay" onClick={handleToggleVisibility} >Toggle Visibility</button>
      </div>
    </>
    );
};

export default Model3d;
