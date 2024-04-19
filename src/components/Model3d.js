import React, { useEffect } from 'react';
import { Viewer, Entity, PointGraphics, EntityDescription } from 'resium';
import { Cartesian3 } from 'cesium';
const Model3d = () => {

return(
  <div style={{ width: '100%', height: '10vh', position: 'relative' }}>
  <Viewer cover>
    <Entity
      name="BoxGraphics"
      position={Cartesian3.fromDegrees(0, 0, 0)}
    >
      <PointGraphics pixelSize={10} />
      <EntityDescription>
        <h1>Hello</h1>
      </EntityDescription>
    </Entity>
  </Viewer>
</div>
)


};

export default Model3d;
