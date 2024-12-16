
import { OrbitControls } from "@react-three/drei";
import {Cube} from "./Cube";

export const Stage = () => {
  return (
    <>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <Cube />
    </>
  );
};
