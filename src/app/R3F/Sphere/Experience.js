import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Sphere from "./Sphere";

export default function Experience() {
  return (
    <Canvas >
      <OrbitControls enableZoom={false} />
      <Sphere />
    </Canvas>
  );
}

