import React, { useEffect } from 'react';

const Model3d = () => {
  useEffect(() => {
    const loadCss = async () => {
      const cssUrl = 'https://cesium.com/downloads/cesiumjs/releases/1.113/Build/Cesium/Widgets/widgets.css';
      await import(cssUrl);
    };

    loadCss();
  }, []);

  return (
    <div id="cesiumContainer" style={{ width: '100%', height: '500px' }}>
      {/* Cesium Viewer will be initialized here */}
    </div>
  );
};

export default Model3d;
