import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, PresentationControls, Stage } from "@react-three/drei";

export const HumanModal = () => {
  const [y, setY] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setY((prevValue) => prevValue + 0.005);
    }, 10);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Canvas
      className="dropShadow"
      dpr={[1, 2]}
      shadows
      camera={{ fov: 60 }}
      style={{ width: "45svw" }}
    >
      <PresentationControls
        speed={4}
        global
        zoom={0.5}
        rotation={[0, y, 0]}
        polar={[-0.1, Math.PI / 4]}
      >
        <Stage environment={"sunset"}>
          <Modal scale={0.01} />
        </Stage>
      </PresentationControls>
    </Canvas>
  );
};

function Modal(props) {
  const { scene } = useGLTF("/human.glb");
  return <primitive object={scene} scale={0.02} {...props} />;
}
