import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import skyScene from '../assets/3d/free_-_skybox_in_the_cloud.glb';
import { useFrame } from '@react-three/fiber';

const Sky = ({ isRotating, ...props }) => {
  const sky = useGLTF(skyScene);
  const skyRef = useRef();

  useFrame((_, delta) => {
    if (!isRotating) { // Rotate the sky when isRotating is true
      skyRef.current.rotation.y += 0.25 * delta;
    }
  });

  return (
    <mesh ref={skyRef} {...props}>
      <primitive object={sky.scene} />
    </mesh>
  );
}

export default Sky;
