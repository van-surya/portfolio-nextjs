"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from 'next/link';

import { useSectionInView } from "../lib/hooks";

import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Image, Environment, ScrollControls, useScroll, useTexture } from '@react-three/drei'
// import Rig from './Rig';
// import Carousel from './Carousel';
import { easing } from 'maath'
import './util'


const youtubes = [
    {
        image: "/assets/images/yt01.jpg",
        title: "Tutorial 1 : Responsive Portfolio Website Design: Learn HTML & CSS by Building Your Own Site",
        link: "https://www.youtube.com/watch?v=pEx8cdCPsFU&list=PLnClDkXINfCrqIBVh2fLjGssj4QVwi41i&pp=gAQBiAQB",
        id: 1,
    },
    {
        image: "/assets/images/yt-1.jpg",
        title: "How to make Slider Card with HTML, CSS, and JavaScript - Step by Step Tutorial",
        link: "https://www.youtube.com/watch?v=uO-FuMAbwyo",
        id: 2,
    },
    {
        image: "/assets/images/yt02.jpg",
        title: "Learn How to Make a Stunning Responsive Travel Website with HTML & CSS: Step-by-Step Tutorial",
        link: "https://www.youtube.com/watch?v=KVlgwi4vggE&list=PLnClDkXINfCr4CBrgHeHLOy9pR7_32-U7",
        id: 3,
    },
    {
        image: "/assets/images/yt03.jpg",
        title: "How to Create a Stunning Personal Website with HTML & CSS",
        link: "https://www.youtube.com/watch?v=XEf0zCRY0rY&list=PLnClDkXINfCrOmRZyxUsBsLVQjgS1XWw5&pp=gAQBiAQB",
        id: 4,
    },
    {
        image: "/assets/images/yt-4.jpg",
        title: "Make Responsive vespa website design using html css and javascript",
        link: "https://www.youtube.com/watch?v=hTZId1EV3C0",
        id: 5,
    },
    {
        image: "/assets/images/yt-6.jpg",
        title: "Make carousel website using HTML CSS And Javascript",
        link: "https://www.youtube.com/watch?v=tRLbHwZabfw",
        id: 6,
    },
    {
        image: "/assets/images/yt-7.jpg",
        title: "How to Make Animation Card using HTML and CSS | Dawnscript",
        link: "https://www.youtube.com/watch?v=fWULDmFjg_I",
        id: 7,
    },
];
export const YoutubeComponent = () => (
    <Canvas camera={{ position: [0, 0, 100], fov: 15 }}>
        <fog attach="fog" args={['#a79', 8.5, 12]} />
        <ScrollControls pages={4} infinite>
            <Rig rotation={[0, 0, 0.15]}>
                <Carousel />
            </Rig>
            <Banner position={[0, -0.15, 0]} />
        </ScrollControls>
        <Environment preset="dawn" />
    </Canvas>
)

function Rig(props) {
    const ref = useRef()
    const scroll = useScroll()
    useFrame((state, delta) => {
        ref.current.rotation.y = -scroll.offset * (Math.PI * 2) // Rotate contents
        state.events.update() // Raycasts every frame rather than on pointer-move
        easing.damp3(state.camera.position, [-state.pointer.x * 2, state.pointer.y + 1.5, 10], 0.3, delta) // Move camera
        state.camera.lookAt(0, 0, 0) // Look at center
    })
    return <group ref={ref} {...props} />
}

function Carousel({ radius = 1.4, count = 8 }) {
    return Array.from({ length: count }, (_, i) => (
        <Card
            key={i}
            url={`/assets/images/yt-${Math.floor(i % 8) + 1}.jpg`}
            position={[Math.sin((i / count) * Math.PI * 2) * radius, 0, Math.cos((i / count) * Math.PI * 2) * radius]}
            rotation={[0, Math.PI + (i / count) * Math.PI * 2, 0]}
        />
    ))
}

function Card({ url, ...props }) {
    const ref = useRef()
    const [hovered, hover] = useState(false)
    const pointerOver = (e) => (e.stopPropagation(), hover(true))
    const pointerOut = () => hover(false)
    useFrame((state, delta) => {
        easing.damp3(ref.current.scale, hovered ? 1.15 : 1, 0.1, delta)
        easing.damp(ref.current.material, 'radius', hovered ? 0.25 : 0.1, 0.2, delta)
        easing.damp(ref.current.material, 'zoom', hovered ? 1 : 1.5, 0.2, delta)
    })
    return (
        <Image ref={ref} url={url} transparent side={THREE.DoubleSide} onPointerOver={pointerOver} onPointerOut={pointerOut} {...props}>
            <bentPlaneGeometry args={[0.1, 1, 1, 20, 20]} />
        </Image>
    )
}

function Banner(props) {
    const ref = useRef()
    const texture = useTexture('/assets/images/hero.png')
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping
    const scroll = useScroll()
    useFrame((state, delta) => {
        ref.current.material.time.value += Math.abs(scroll.delta) * 4
        ref.current.material.map.offset.x += delta / 2
    })
    return (
        <mesh ref={ref} {...props}>
            <cylinderGeometry args={[1.6, 1.6, 0.14, 128, 16, true]} />
            <meshSineMaterial map={texture} map-anisotropy={16} map-repeat={[30, 1]} side={THREE.DoubleSide} toneMapped={false} />
        </mesh>
    )
}
