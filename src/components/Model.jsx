import React, { useMemo } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Model = () => {
  const gltf = useLoader(GLTFLoader, '/lucy.glb'); // Path is relative to the public folder

  // Optional: You can useMemo to avoid reloading the model on every render
  const model = useMemo(() => {
    if (gltf) {
      // Assuming your GLB model contains a single scene
      return gltf.scene;
    }
  }, [gltf]);

  return model ? <group scale={[32, 32, 32]}><primitive object={model} /></group> : null; // Adjust the scale as needed
};

export default Model;
