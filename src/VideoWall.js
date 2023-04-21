import React, { Suspense, useState } from "react";
import { Text, useVideoTexture } from "@react-three/drei";

const VideoWall = () => {
  const express_url = "http://localhost:8080/";
  const videoUrl = "https://www.youtube.com/watch?v=bpOSxM0rNPM";

  const videoSrc = `${express_url}video?url=${videoUrl}`;

  const [play, setPlay] = useState(false);

  const videoProps = { start: play, muted: play };
  const videoTexture = useVideoTexture(videoSrc, videoProps);

  return (
    <>
      {/*-------------------------------------- TITULO --------------------------------------*/}
      <Text position={[0, 2, 0]} scale={0.3}>
        Video cargado desde youtube
      </Text>

      {/*------------------------------- INTEGRANTES -------------------------------*/}

      <Text scale={0.25} position={[-4.5, -1.5, -1]} rotation={[30, 0, 0]}>
        {"Integrantes\n\nKevin Alejandro Abadia\nDamián Alessandro Espinosa\nJoshua Sebastian Chicame\nCristian Camilo Torijano\nDaniel José Cubides"}
      </Text>

      {/*-------------------------------------- VIDEO --------------------------------------*/}

      <Suspense>
        <mesh
          position={[0, 0, 0]}
          scale={2}
          onClick={() => {
            setPlay(!play);
          }}
        >
          <boxGeometry />
          <meshStandardMaterial map={videoTexture} toneMapped={false} />
        </mesh>
      </Suspense>
    </>
  );
};

export default VideoWall;
