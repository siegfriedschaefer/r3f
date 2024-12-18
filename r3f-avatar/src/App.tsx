
import { Canvas } from '@react-three/fiber';
import { Stage } from './components/Stage';

function App() {

  return (
    <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
      <color attach="background" args={["#ececec"]} />
      <Stage />
    </Canvas>
  );

}

export default App;
