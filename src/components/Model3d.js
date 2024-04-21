import React, { useEffect, useRef } from 'react';
import * as Cesium from 'cesium';



const Model3d = () => {
  const cesiumContainer = useRef(null);
  const viewerRef = useRef(null);

    useEffect(() => {
        // Asegurarse de que el contenedor DOM está listo
        if (cesiumContainer.current) {
          // Configura el token de acceso de Cesium Ion
          Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyMmVlZDFkZC02NTljLTQ5ZDgtYWExMy0zODc1NzI5Yzk5MWUiLCJpZCI6MTc4NzY3LCJpYXQiOjE3MDAxMzg3MjZ9.yGl0rRvvjoGMDoH0qSx4t0TZMDy1r2hzRsspYZyL2zk';
          const viewer = new Cesium.Viewer("cesiumContainer", {
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
            const tileset = await Cesium.Cesium3DTileset.fromIonAssetId(2373034);
            viewer.scene.primitives.add(tileset);
            await viewer.zoomTo(tileset);

            const extras = tileset.asset.extras;
            if (
                Cesium.defined(extras) &&
                Cesium.defined(extras.ion) &&
                Cesium.defined(extras.ion.defaultStyle)
            ) {
                tileset.style = new Cesium.Cesium3DTileStyle(extras.ion.defaultStyle);
            }
        } catch (error) {
            console.error(error);
        }

        }
        initCesium();


      

        }
    }, []); // El array vacío asegura que esto solo se ejecute una vez al montar el componente

    return (
        <div id="cesiumContainer" ref={cesiumContainer} style={{ width: '100%', height: '95vh' }}></div>
    );
};

export default Model3d;
