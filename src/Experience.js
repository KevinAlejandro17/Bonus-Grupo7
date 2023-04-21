import {
  OrbitControls,
  Sky,
  useTexture,
  Stars,
  MeshReflectorMaterial,
  Float,
} from "@react-three/drei";

import React from "react";

import VideoWall from "./VideoWall";

const Experience = () => {
  const texture = useTexture("/static/texture.jpg");

  return (
    <>
      <OrbitControls makeDefault />

      {/*-------------------------------------- LUCES --------------------------------------*/}
      <directionalLight position={[1, 5, 1]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      {/*-------------------------------------- SUELO --------------------------------------*/}
      <mesh position-y={-1.5} rotation-x={-Math.PI * 0.5} scale={5}>
        <planeGeometry />
        <meshStandardMaterial map={texture} />
      </mesh>

      {/*-------------------------------------- VIDEO --------------------------------------*/}
      <VideoWall />
    </>
  );
};

export default Experience;
