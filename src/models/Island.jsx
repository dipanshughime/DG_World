import { a } from "@react-spring/three";
import { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

import islandScene from "../assets/3d/myIsland.glb";


const Island = ({ isRotating,
  setIsRotating,
  setCurrentStage,
  currentFocusPoint,
  ...props}) => {
  const islandRef = useRef();
  const { gl, viewport } = useThree();
  const { nodes, materials } = useGLTF(islandScene);

  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;

  const handlePointerDown = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setIsRotating(true);

    const clientX = event.touches ? event.touches[0].clientX : event.clientX;

    lastX.current = clientX;
  };

  const handlePointerUp = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setIsRotating(false);
  };

  const handlePointerMove = (event) => {
    event.stopPropagation();
    event.preventDefault();
    if (isRotating) {
      const clientX = event.touches ? event.touches[0].clientX : event.clientX;

      const delta = (clientX - lastX.current) / viewport.width;

      islandRef.current.rotation.y += delta * 0.01 * Math.PI;

      lastX.current = clientX;

      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      if (!isRotating) setIsRotating(true);

      islandRef.current.rotation.y += 0.005 * Math.PI;
      rotationSpeed.current = 0.007;
    } else if (event.key === "ArrowRight") {
      if (!isRotating) setIsRotating(true);

      islandRef.current.rotation.y -= 0.005 * Math.PI;
      rotationSpeed.current = -0.007;
    }
  };

  const handleKeyUp = (event) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      setIsRotating(false);
    }
  };
  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [gl, handlePointerDown, handlePointerUp, handlePointerMove]);

  useFrame(() => {
    if (!isRotating) {
      
      rotationSpeed.current *= dampingFactor;

      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }

      islandRef.current.rotation.y += rotationSpeed.current;
    } else {
      const rotation = islandRef.current.rotation.y;

     
      const normalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

      switch (true) {
        case normalizedRotation >= 5.45 && normalizedRotation <= 6.85:
          setCurrentStage(1);
          break;
        case normalizedRotation >= 4.75 && normalizedRotation <= 5.15:
          setCurrentStage(2);
          break;
        case normalizedRotation >= 3.95 && normalizedRotation <= 4.25:
          setCurrentStage(3);
          break;
        case normalizedRotation >= 3.35 && normalizedRotation <= 3.75:
          setCurrentStage(4);
          break;
        case normalizedRotation >= 1.95 && normalizedRotation <= 2.75:
          setCurrentStage(6);
          break;
        case normalizedRotation >= 0.65 && normalizedRotation <= 1.35:
          setCurrentStage(5);
          break;
        default:
          setCurrentStage(null);
      }
    }
  });
  return (
    <a.group ref={islandRef} {...props}>
       <group rotation={[-Math.PI / 2, 0, 0]}>
      {/* <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.BALOON}
        /> */}
        {/* <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.BALOON_BULB}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.BALOON_CURVE}
        /> */}
      
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.DROPS_PIPE}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.ISLAND_BASE_SHADOW}
        />
        {/* <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials.base_island_additional_pipes}
        /> */}
        {/* <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials["base_island_additional_pipes_BEAM.001"]}
        /> */}
        {/* <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_9.geometry}
          material={materials.base_island_additional_pipes_transarent}
        /> */}
        {/* <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_10.geometry}
          material={materials.curve_Pipe}
        /> */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_11.geometry}
          material={materials.island_Connector_CURVE}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_12.geometry}
          material={materials.island_Metal_holders}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_13.geometry}
          material={materials.machine_MAIN}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_14.geometry}
          material={materials.machine_REACTOR}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_15.geometry}
          material={materials.machine_REACTOR_transparent}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_16.geometry}
          material={materials.machine_RENTGEN}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_17.geometry}
          material={materials.machine_TELEPORT_flash}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_18.geometry}
          material={materials.machine_TELEPORT_transparent}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_19.geometry}
          material={materials.sphere}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_20.geometry}
          material={materials.ISLAND_BASE}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_21.geometry}
          material={materials.ISLAND_BASE}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_22.geometry}
          material={materials.machine_PRINTER}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_23.geometry}
          material={materials.machine_PRINTER}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_24.geometry}
          material={materials.machine_TELEPORT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_25.geometry}
          material={materials.machine_TELEPORT}
        />
        </group>
    </a.group>
  );
};

export default Island;
