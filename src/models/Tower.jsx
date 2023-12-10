import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import tower from "../assets/3d/flying_tower.glb";

const Tower = ({ isRotating, ...props }) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(tower);
  const { actions } = useAnimations(animations, group);

  useFrame((_, delta) => {
    if (isRotating) {
      group.current.rotation.y += 0.25 * delta;
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group
                name="TowerController_32"
                position={[0.894, 0.964, 1.653]}
                scale={0.228}
              >
                <mesh
                  name="Object_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4.geometry}
                  material={materials.material_0}
                />
                <group
                  name="Tower_31"
                  position={[-0.617, -5.845, -9.361]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={4.39}
                >
                  <group name="GLTF_created_0">
                    <primitive object={nodes.GLTF_created_0_rootJoint} />
                    <skinnedMesh
                      name="Object_9"
                      geometry={nodes.Object_9.geometry}
                      material={materials["Material.002"]}
                      skeleton={nodes.Object_9.skeleton}
                    />
                    <group name="Cylinder007_22" />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("/flying_tower.glb");

export default Tower;
