
import { OrbitControls } from "@react-three/drei";

export const Stage = () => {
  return (
    <>
      <OrbitControls />
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshNormalMaterial />
      </mesh>
    </>
  );
};
