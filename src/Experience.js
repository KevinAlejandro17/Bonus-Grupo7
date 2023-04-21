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
import ImageWall from "./ImageWall";
import { DoubleSide } from "three";

const Experience = () => {
  const texture = useTexture("/static/texture.jpg");

  return (
    <>
      <OrbitControls makeDefault />
      {/*-------------------------------------- CIELO Y ESTRELLAS --------------------------------------*/}
      <Sky
        distance={45000}
        sunPosition={[1, -0.35, -10]}
        inclination={0}
        azimuth={0.25}
        elevation={1}
        rayleigh={3}
      />
      <Stars factor={1} saturation={10} />

      {/*-------------------------------------- LUCES --------------------------------------*/}
      <directionalLight position={[1, 5, 1]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <Float>
        {/*-------------------------------------- SUELO --------------------------------------*/}
        <mesh position-y={-1.5} rotation-x={-Math.PI * 0.5} scale={5}>
          <planeGeometry />
          <MeshReflectorMaterial
            color="gray"
            mirror={1}
            blur={[0, 0]}
            resolution={1080}
            side={DoubleSide}
          />
        </mesh>

        {/*-------------------------------------- VIDEO --------------------------------------*/}
        <VideoWall />
        {/*-------------------------------------- IMAGENES --------------------------------------*/}
        <ImageWall />
      </Float>
    </>
  );
};

export default Experience;
