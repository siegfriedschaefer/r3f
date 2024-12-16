
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

export const Cube = () => {
    const cubeRef = useRef<Mesh>(null);

    useFrame(() => {
        if (cubeRef.current) {
            cubeRef.current.rotation.x += 0.01;
            cubeRef.current.rotation.y += 0.01;
        }
    });

    return (
        <mesh ref={cubeRef} rotation-x={Math.PI*0.25} rotation-y={Math.PI * 0.25} >
            <boxGeometry args={[1, 1, 1]} />
            <meshNormalMaterial />
        </mesh>
  );
};
