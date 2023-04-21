import React, { Suspense, useState } from "react";
import { Text, useVideoTexture } from "@react-three/drei";
import { DoubleSide } from "three";


const VideoWall = () => {
  //const express_url = "http://localhost:8080/";
  //const videoUrl = "https://www.youtube.com/watch?v=tD72sPleMaM";

  //const videoSrc = `${express_url}video?url=${videoUrl}`;

  const videoSrc = "/static/world.mp4";

  const [play, setPlay] = useState(false);

  const videoProps = { start: play, muted: play };
  const videoTexture = useVideoTexture(videoSrc, videoProps);

  return (
    <>
      {/*-------------------------------------- TITULO --------------------------------------*/}
      <Text position={[0, 4, -2.5]} scale={0.5}>
        Video
      </Text>

      {/*-------------------------------------- VIDEO --------------------------------------*/}

      <React.Suspense fallback={<meshBasicMaterial wireframe />}>
        <mesh
          position={[0, 1, -2.5]}
          scale={5}
          onClick={() => {
            setPlay(!play);
          }}
        >
          <planeGeometry />
          <meshStandardMaterial
            map={videoTexture}
            toneMapped={false}
            side={DoubleSide}
          />
        </mesh>
      </React.Suspense>
    </>
  );
};

export default VideoWall;
