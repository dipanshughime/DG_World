import React from 'react'
import birdScene from '../assets/3d/tower.glb'
import { useGLTF } from '@react-three/drei';

const Bird  = () => {
    const {scene ,amimations} = useGLTF(birdScene);
  return (
    <mesh position={[2,2,1]} scale={[0.03,0.03,0.03]}>
    <primitive object={scene}/>
   </mesh>
  )
}

export default Bird 