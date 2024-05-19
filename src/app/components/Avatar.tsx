import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface AvatarProps {
    position: [number, number, number];
    scale: number;
    // other props...
}

export function Avatar(props: AvatarProps) {
    const { nodes, materials } = useGLTF("/models/646d9dcdc8a5f5bddbfac913.glb") as any;
    const { animations: idleAnimation } = useFBX("/animations/NeutralIdle.fbx") as any;

    idleAnimation[0].name = "Idle";

    const [animation, setAnimation] = useState("Idle");

    const group = useRef<THREE.Group>(null!);
    const { actions } = useAnimations(idleAnimation, group);

    useEffect(() => {
        if (actions && actions[animation]) {
            const action = actions[animation];
            if (action) {
                action.reset().fadeIn(0.5).play();
                action.setLoop(THREE.LoopRepeat, Infinity);
                return () => {
                    action.fadeOut(0.5);
                };
            }
        }
    }, [animation, actions]);

    const { camera } = useThree();
    const prevRotation = useRef({ x: 0, y: 0 });
    const targetRotation = useRef({ x: 0, y: 0 });

    useFrame(({ mouse }) => {
        const { x, y } = mouse;
        const maxRotationX = Math.PI / 20;
        const maxRotationY = Math.PI / 20;

        targetRotation.current = {
            x: THREE.MathUtils.lerp(-maxRotationX, maxRotationX, (y + 1) / 2),
            y: THREE.MathUtils.lerp(-maxRotationY, maxRotationY, (x + 1) / 2),
        };

        camera.rotation.x = THREE.MathUtils.lerp(
            prevRotation.current.x,
            targetRotation.current.x,
            0.05
        );

        camera.rotation.y = THREE.MathUtils.lerp(
            prevRotation.current.y,
            targetRotation.current.y,
            0.05
        );

        prevRotation.current = { x: camera.rotation.x, y: camera.rotation.y };
    });

    useFrame((state) => {
        if (group.current) {
            const head = group.current.getObjectByName("Head");
            if (head) {
                head.lookAt(state.camera.position);
            }
        }
    });

    return (
        <group {...props} dispose={null} ref={group}>
            <primitive object={nodes.Hips} />
            <skinnedMesh
                geometry={(nodes.Wolf3D_Body as THREE.Mesh).geometry}
                material={materials.Wolf3D_Body}
                skeleton={(nodes.Wolf3D_Body as THREE.SkinnedMesh).skeleton}
            />
            <skinnedMesh
                geometry={(nodes.Wolf3D_Outfit_Bottom as THREE.Mesh).geometry}
                material={materials.Wolf3D_Outfit_Bottom}
                skeleton={(nodes.Wolf3D_Outfit_Bottom as THREE.SkinnedMesh).skeleton}
            />
            <skinnedMesh
                geometry={(nodes.Wolf3D_Glasses as THREE.Mesh).geometry}
                material={materials.Wolf3D_Glasses}
                skeleton={(nodes.Wolf3D_Glasses as THREE.SkinnedMesh).skeleton}
            />
            <skinnedMesh
                geometry={(nodes.Wolf3D_Outfit_Footwear as THREE.Mesh).geometry}
                material={materials.Wolf3D_Outfit_Footwear}
                skeleton={(nodes.Wolf3D_Outfit_Footwear as THREE.SkinnedMesh).skeleton}
            />
            <skinnedMesh
                geometry={(nodes.Wolf3D_Outfit_Top as THREE.Mesh).geometry}
                material={materials.Wolf3D_Outfit_Top}
                skeleton={(nodes.Wolf3D_Outfit_Top as THREE.SkinnedMesh).skeleton}
            />
            <skinnedMesh
                geometry={(nodes.Wolf3D_Hair as THREE.Mesh).geometry}
                material={materials.Wolf3D_Hair}
                skeleton={(nodes.Wolf3D_Hair as THREE.SkinnedMesh).skeleton}
            />
            <skinnedMesh
                name="EyeLeft"
                geometry={(nodes.EyeLeft as THREE.Mesh).geometry}
                material={materials.Wolf3D_Eye}
                skeleton={(nodes.EyeLeft as THREE.SkinnedMesh).skeleton}
                morphTargetDictionary={(nodes.EyeLeft as THREE.SkinnedMesh).morphTargetDictionary}
                morphTargetInfluences={(nodes.EyeLeft as THREE.SkinnedMesh).morphTargetInfluences}
            />
            <skinnedMesh
                name="EyeRight"
                geometry={(nodes.EyeRight as THREE.Mesh).geometry}
                material={materials.Wolf3D_Eye}
                skeleton={(nodes.EyeRight as THREE.SkinnedMesh).skeleton}
                morphTargetDictionary={(nodes.EyeRight as THREE.SkinnedMesh).morphTargetDictionary}
                morphTargetInfluences={(nodes.EyeRight as THREE.SkinnedMesh).morphTargetInfluences}
            />
            <skinnedMesh
                name="Wolf3D_Head"
                geometry={(nodes.Wolf3D_Head as THREE.Mesh).geometry}
                material={materials.Wolf3D_Skin}
                skeleton={(nodes.Wolf3D_Head as THREE.SkinnedMesh).skeleton}
                morphTargetDictionary={(nodes.Wolf3D_Head as THREE.SkinnedMesh).morphTargetDictionary}
                morphTargetInfluences={(nodes.Wolf3D_Head as THREE.SkinnedMesh).morphTargetInfluences}
            />
            <skinnedMesh
                name="Wolf3D_Teeth"
                geometry={(nodes.Wolf3D_Teeth as THREE.Mesh).geometry}
                material={materials.Wolf3D_Teeth}
                skeleton={(nodes.Wolf3D_Teeth as THREE.SkinnedMesh).skeleton}
                morphTargetDictionary={(nodes.Wolf3D_Teeth as THREE.SkinnedMesh).morphTargetDictionary}
                morphTargetInfluences={(nodes.Wolf3D_Teeth as THREE.SkinnedMesh).morphTargetInfluences}
            />
        </group>
    );
}

useGLTF.preload("/models/646d9dcdc8a5f5bddbfac913.glb");
