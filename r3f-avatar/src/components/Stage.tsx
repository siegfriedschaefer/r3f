
import { Environment, OrbitControls } from "@react-three/drei";
import { Alex } from "./avatars/Alex";
import { Cube } from "./Cube";

export const Stage = () => {
  return (
    <>
      <OrbitControls />
      <Environment preset="apartment" />
      <ambientLight intensity={0.5} />
      <Alex position={[0, -3, 5]} scale={2}/>
    </>
  );
};
