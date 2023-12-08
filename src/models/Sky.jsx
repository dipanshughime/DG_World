import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import skyScene from "../assets/3d/anime_sky.glb";

// 3D Model from: https://sketchfab.com/3d-models/phoenix-bird-844ba0cf144a413ea92c779f18912042
const  Sky=({ isRotating }) =>{
  const sky = useGLTF(skyScene);
  const skyRef = useRef();

 
  useFrame((_, delta) => {
    if (isRotating) {
      skyRef.current.rotation.y += 0.25 * delta; // Adjust the rotation speed as needed
    }
  });

  return (
    <mesh ref={skyRef}>
      // use the primitive element when you want to directly embed a complex 3D
      model or scene
      <primitive object={sky.scene} />
    </mesh>
  );
}
export default Sky;
