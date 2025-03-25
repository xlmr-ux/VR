import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei'; // Import OrbitControls for camera movement
import Model from './Model';

const ArModel = () => {
  return (
    <Canvas
      style={{ width: '100%', height: '80vh' }}
      camera={{ position: [0, 0, 10] }} // Adjust camera position for better visibility
    >
      <ambientLight intensity={0.5} />
      <spotLight intensity={0.8} position={[300, 300, 4000]} />
      <OrbitControls /> {/* Add OrbitControls for user interaction */}
      <Model />
    </Canvas>
  );
};

export default ArModel;
