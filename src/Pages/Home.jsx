import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../Components/Loder'; // Assuming you meant 'Loader' instead of 'Loder'
import Island from '../models/island';
import Sky from '../models/sky';
import Bird from '../models/bird';
import Plane from '../models/Plane';
import HomeInfo from '../Components/HomeInfo';

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  const adjustBiplaneForScreenSize = () => {
    let screenScale, screenPosition;

    // If screen width is less than 768px, adjust the scale and position
    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [2.7, 2.7, 2.7];
      screenPosition = [0,-2, -4];
    }

    return [screenScale, screenPosition];
  };
  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;
  
    if (window.innerWidth < 768) {
      // Scale down the island for smaller screens
      screenScale = [0.5, 0.5, 0.5]; // Adjust the scale factor as needed
      screenPosition = [0, -6.5, -43.4];
    } else {
      // Use the default scale for larger screens
      screenScale = [0.027, 0.027, 0.027];
      screenPosition = [0, -6.5, -43.4];
    }
  
    return [screenScale, screenPosition];
  };
  

  const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();

  return (
    <section className='w-full h-screen relative'>
       <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
       {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <Canvas className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`} 
        camera={{ near: 0.1, far: 1000 }}>
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
          
          <Bird />
          <Sky isRotating={isRotating} />
          <Island
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            position={islandPosition}
            rotation={[0.1, 4.7077, 0]}
            scale={islandScale}
          />
          <Plane
            isRotating={isRotating}
            position={biplanePosition}
            rotation={[0, 20.1, 0]}
            scale={biplaneScale}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
