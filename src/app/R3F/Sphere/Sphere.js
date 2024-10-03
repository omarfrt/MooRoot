import { useFrame } from "@react-three/fiber";

import { useRef } from "react";

export default function Sphere() {
  const meshRef = useRef();
  
  useFrame((state, delta) => {
  })
  return (
    <>
    <directionalLight position={[1, 1, 0]} intensity={4.5} />
    <ambientLight intensity={1} />
    <mesh  ref={meshRef}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshStandardMaterial color="white" />
        {/* <torusKnotGeometry/>
        <meshNormalMaterial/> */}
      </mesh>
    </>
  );
}
