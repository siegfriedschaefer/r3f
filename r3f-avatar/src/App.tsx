
import { Canvas } from '@react-three/fiber';
import { Stage } from './components/Stage';

function App() {

  return (
    <Canvas shadows camera={{ position: [0, 0, 8], fov: 42 }}>
      <color attach="background" args={["#ececec"]} />
      <Stage />
    </Canvas>
  );

}

export default App;
