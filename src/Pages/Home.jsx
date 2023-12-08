import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../Components/Loder'; // Assuming you meant 'Loader' instead of 'Loder'
import Island from '../models/island';
import Sky from '../models/sky';
import Bird from '../models/bird';
import Plane from '../models/Plane';

const Home = () => {
  const adjustBiplaneForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition, islandRotation;

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43.4];
      islandRotation = [0.1, 4, 7, 0];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43.4];
      islandRotation = [0, 0, 0];
    }

    return [screenScale, screenPosition, islandRotation];
  };

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();

  return (
    <section className='w-full h-screen relative'>
      <Canvas className='w-full h-screen bg-transparent' camera={{ near: 0.1, far: 1000 }}>
        <Suspense fallback={<Loader />}>
        <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <hemisphereLight
            skyColor='#b1e1ff'
            groundColor='#000000'
            intensity={1}
          />
          <Sky/>
          <Bird/>
          <Island position={islandPosition} scale={islandScale} rotation={islandRotation} />
          <Plane/>
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
