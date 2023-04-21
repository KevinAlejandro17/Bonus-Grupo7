import React, { useState, useRef } from "react";
import { Text, useTexture } from "@react-three/drei";

import { DoubleSide } from "three";

const ImageWall = () => {
  const [imageSrc, setImageSrc] = useState('https://picsum.photos/800/800');

  const texture = useTexture(imageSrc);

  const handleEvent = () => {
    let index = Math.floor(Math.random() * 10) + 1;
    setImageSrc(`/static/${index}.jpg`)
  };

  return (
    <>
          {/*-------------------------------------- TITULO --------------------------------------*/}

      <Text
        position={[2.5, 4, 0]}
        rotation={[0, -Math.PI * 0.5, 0]}
        scale={0.5}
      >
        Imagen
      </Text>

      {/*------------------------------------- IMAGEN --------------------------------------*/}

      <mesh
        position={[2.5, 1, 0]}
        scale={5}
        rotation={[0, -Math.PI * 0.5, 0]}
        onPointerEnter={handleEvent}
      >
        <planeGeometry />
        <meshStandardMaterial map={texture} side={DoubleSide}/>
      </mesh>
    </>
  );
};

export default ImageWall;